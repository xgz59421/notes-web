const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const resolve = file => path.resolve(__dirname, file)

module.exports = (server, callback) => {
  let ready
  const onReady = new Promise(r => ready = r)

  // 监视构建 -> 更新 Renderer

  let template
  let serverBundle
  let clientManifest

  const update = () => {
    if (template && serverBundle && clientManifest) {
      ready()
      callback(serverBundle, template, clientManifest)
    }
  }

  // 监视构建 template -> 调用 update -> 更新 Renderer 渲染器
  const templatePath = path.resolve(__dirname, '../index.template.html')
  template = fs.readFileSync(templatePath, 'utf-8')
  update()
  // fs.watch、fs.watchFile
  // chokidar 优化过后的fs.watch、fs.watchFile
  chokidar.watch(templatePath).on('change', () => {
    template = fs.readFileSync(templatePath, 'utf-8')
    update()
  })

  // 监视构建 serverBundle -> 调用 update -> 更新 Renderer 渲染器
  const serverConfig = require('./webpack.server.config')
  const serverCompiler = webpack(serverConfig)

  /* 使用物理磁盘读取
    serverCompiler.watch({}, (err, status) => {
    if (err) throw err;
    if (status.hasErrors) return
    serverBundle = JSON.parse(fs.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8'))
    update();
  })
  */
  // 使用内存读取
  const serverDevMiddleware = devMiddleware(serverCompiler, {
    logLevel: 'silent' // 关闭日志输出，由 FriendlyErrorsWebpackPlugin 处理
  })
  serverCompiler.hooks.done.tap('server', () => {
    serverBundle = JSON.parse(
      // devMiddleware 操作的是内存, 不是物理磁盘
      serverDevMiddleware.fileSystem.readFileSync(resolve('../dist/vue-ssr-server-bundle.json'), 'utf-8')
    )
    update()
  })




  // 监视构建 clientManifest -> 调用 update -> 更新 Renderer 渲染器
  const clientConfig = require('./webpack.client.config')
  // 热更新
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  clientConfig.entry.app = [
     // 和服务端交互处理热更新一个客户端脚本
     // quiet=true 去掉日志
     // reload=true 如果卡主重新加载
    'webpack-hot-middleware/client?quiet=true&reload=true',
    clientConfig.entry.app
  ]
  // 热更新模式下确保一致的名字, 建议不使用hash
  clientConfig.output.filename = '[name].js' 
  const clientCompiler = webpack(clientConfig)
  const clientDevMiddleware = devMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    logLevel: 'silent' // 关闭日志输出，由 FriendlyErrorsWebpackPlugin 处理
  })
  clientCompiler.hooks.done.tap('client', () => {
    clientManifest = JSON.parse(
      clientDevMiddleware.fileSystem.readFileSync(resolve('../dist/vue-ssr-client-manifest.json'), 'utf-8')
    )
    update()
  })
  server.use(hotMiddleware(clientCompiler, {
    log: false // 关闭它本身的日志输出
  }))

  // 重要！！！将 clientDevMiddleware 挂载到 Express 服务中，提供对其内部内存中数据的访问
  server.use(clientDevMiddleware)

  return onReady
}
