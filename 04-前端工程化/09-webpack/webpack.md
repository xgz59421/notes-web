## webpack
- [1. webpack 几种启动方式](#1)
- [2. webpack 常用配置](#2)
- [3. webpack 不同环境下的配置](#3)
- [4. webpack 多入口配置](#4)
- [5. webpack 魔法注释](#5)
--------

><h2 id='1'>1. webpack 几种启动方式</h2>
```js
// 没有配置 mode时
1. yarn webpack --mode production

// 监视模式 会先写入到dist, 然后刷新页面
2. yarn webpack --watch 

// yarn add webpack-dev-server --dev
// 直接刷新页面, 不会先写入到dist
3. yarn webpack-dev-server
4. yarn webpack-dev-server --open  //直接打开浏览器

// 如果没有设置 
// 1. new HotModuleReplacementPlugin
// 2. devServe {hotOnly: true / hot: true}
// 开启热替换, 不必完全刷新应用, 有些文件需要单独配置, 比如js
5. yarn webpack-dev-server --open --hot

// 如果没有配置webpack.config.js 如配置了不同的webpack
6. yarn webpack --config webpack.prod.js
```

><h2 id='2'>2. webpack 常用配置</h2>
```js
module.exports = {
  // 1. 入口
  entry: './src/main.js',
  // 2. 出口
  output: {
    filename: 'bundle.js',
    // 配置带有hash的.js 解决缓存  
    // name是 多入口配置时使用，此处可以省略
    // filename: '[name]-[contenthash:8].bundle.js'
    // path 要求绝对路径
    // const path = require('path')
    path: path.join(__dirname, 'dist'),
    // 指定图片等输出位置, 否则js找不到
    // 用 CopyWebpackPlugin插件 就可以将`publicPath`去掉了
    publicPath: 'dist/'
  },
  // 8. 集中配置优化功能
  optimization: {
    // 副作用 (除了导出 做了其他事情)
    // package.json下:
      // 将下列有副作用的文件引入 dist
      // "sideEffects": [
      //   "./src/extend.js",
      //   "*.css"
      // ]
    sideEffects: true,
    // tree shaking 摇树(去掉未引用代码)
    // 生产环境下 自动开启
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,


    // 放入minimizer 原因,  生产环境自动开启minimizer
    // 压缩输出结果
    // minimize: true
    minimizer: [
      // 内置的 js压缩插件
      new TerserWebpackPlugin(),
      // 开发环境不进行压缩
      // 压缩`css`输出
      // 配合new MiniCssExtractPlugin() 使用
      // yarn add optimize-css-assets-webpack-plugin --dev
      new OptimizeCssAssetsWebpackPlugin() 
    ]
  }
  // 7. 配置source源, 用于查看打包后的报错位置
  devtool: 'source-map',
  // 6. 指定开发阶段配置选项
  devServer: {
    // 开发阶段 不用new CopyWebpackPlugin(['public']) 
    // 使用 contentBase 访问静态资源
    contentBase: './public',  // 也可配置为 []

    // 遇到错误, 不回退到自动刷新, 不会报错
    // hot: true
    // 只使用 HMR，不会 fallback 到 live reloading
    // 也就是说, hotOnly热替换, 遇到错误, 会报错, 不会自动刷新
    hotOnly: true 
    
    // 本地请求: http://localhost:8080/api/users
    // 最终要访问: https://api.github.com/users
    proxy: {
      '/api': {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: 'https://api.github.com',
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          '^/api': ''  
        },
        // 不能使用 localhost:8080 作为请求 GitHub 的主机名
        changeOrigin: true
      }
    }
  },
  // 3. 模式
    // 1. 生产模式下，Webpack 会自动优化打包结果；
    // 2. 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
    // 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
    // 如果不进行配置, 可以 yarn webpack --mode production
  mode: 'development', //production none
  // 4. webpack 默认只压缩js, 其他类型文件 使用module进行配置
  module: {
    // loader 专注实现资源模块的加载
    rules: [
      {
        // yarn @babel/core @babel/preset-env babel-loader --dev
        test: /.js$/,
        use: {
          // es6 => es5
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // yarn add style-loader css-loader --dev
        test: /.css$/,
        // 配置多个loader, 会从后向前执行
        use: [
          // 'style-loader',  // 2. 把转换后的结果追加到页面上
          MiniCssExtractPlugin.loader,
          'css-loader'  // 1. 进行转换
        ]
      },
      {
        // yarn add file-loader url-loader --dev
        test: /\.(png|jpe?g|gif)$/,
        // use: 'file-loader'
        use: {
          // 小于10kb的 base64处理, 大于的 file-loader输出
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      },
      {
        // yarn add html-loader --dev
        test: /.html$/,
        use: {
          // 打包html文件 //默认处理 img.scr 的属性
          loader: 'html-loader',
          options: {
            // 配置`html`中 其他的属性
            attrs: ['img:src', 'a:href']
          }
        }
      }
    ]
  },
  // 5. 插件
  // 解决其他自动化功能
  plugins: [
    // const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    // yarn add clean-webpack-plugin --dev
    new CleanWebpackPlugin(), // 清除之前dist中用不到的文件
    // yarn add html-webpack-plugin --dev
    // 用于生成 index.html
    // const HtmlWebpackPlugin = require('html-webpack-plugin')
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html'
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    // yarn add copy-webpack-plugin --dev
    // const CopyWebpackPlugin = require('copy-webpack-plugin')
    // 有了它就可以注释掉 publicPath: 'dist/'
    // 开发阶段最好不要使用这个插件
    // new CopyWebpackPlugin([
    //   // 'public/**'
    //   'public'
    // ]),

    // 热替换模块 
    // 实时替换运行应用的某个模块, 不必完全刷新应用
    // 方式一: 
    // --open 默认打开浏览器
    // --hot 开启热替换
    //  yarn webpack-dev-server --open --hot
    // 方式二: 
    // 还需要配置 devServer{hot:true/hotOnly:true}
    new webpack.HotModuleReplacementPlugin()

    // 全局配置了一个 API_BASE_URL
    // cli 中的 process.env.xxx
    // const webpack = require('webpack')
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      API_BASE_URL: JSON.stringify('https://api.example.com')
    }),

    // 按需加载CSS样式
    // 注意修改 css loader
    // 去掉`style-loader` 替换为 MiniCssExtractPlugin.loader
    // const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    // 压缩配置
    // 配合optimization下 minimizer下 new OptimizeCssAssetsWebpackPlugin() 
    // yarn add mini-css-extract-plugin --dev
    // new MiniCssExtractPlugin()
    new MiniCssExtractPlugin({
      // name是多入口时候使用, 此处可以省略
      // 三种哈希
      // 1. 项目级别的, 任何文件修改, 整个项目文件都要重新打包
      // filename: '[name]-[hash].bundle.css' 
      // 2. 目录级别的, 同一目录需要重新打包 
      // filename: '[name]-[chunckhash].bundle.css'
      // 3. 文件级别的, 相关文件进行重新打包
      // filename: '[name]-[contenthash].bundle.css'
      // 指定hash的长度 :8  推荐
      filename: '[name]-[contenthash:8].bundle.css'
    })
  ]
}

```

><h2 id='3'>1. webpack 不同环境下的配置</h2>
1. 配置文件根据环境不同导出不同配置 (主要根据判断)
```js
module.exports = (env, argv) => {
  const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js'
    },
    module: {
      rules: [
        { },...
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Tutorial',
        template: './src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
  if (env === 'production') {
    config.mode = 'production'
    config.devtool = false
    config.plugins = [
      ...config.plugins,
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(['public'])
    ]
  }
  return config
}
```
2. 不同环境对应不同配置文件
```js
// yarn add webpack-merge --dev
// 公共配置
webpack.common.js 
// 各自配置
webpack.dev.js
webpack.prod.js

const common = require('./webpack.common')
module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
// 通过 merge 合并 公共的webpack选项
因为没有 `webpack.config.js`
yarn webpack --config webpack.prod.js
```

><h2 id='4'>4. webpack 多入口配置</h2>
```js
  // 两个入口
  entry: {
    index: './src/index.js',
    album: './src/album.js'
  },
    // 这里 'name'会被替换为 index, album
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独 bundle
      chunks: 'all'
    }
  },
    // 为每个入口配置不同的chunks, 否则每个html会引入多个js
  new HtmlWebpackPlugin({
    title: 'Multi Entry',
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['index']
  }),
  new HtmlWebpackPlugin({
    title: 'Multi Entry',
    template: './src/album.html',
    filename: 'album.html',
    chunks: ['album']
  })
```

><h2 id='5'>5. webpack 魔法注释</h2>
```js
`主要用于js代码中`, 然后再webpack打包时候起作用
  if (hash === '#posts') {
    // mainElement.appendChild(posts())
    // 会打包到  posts.bundle.js 中
    import(/* webpackChunkName: 'posts' */'./posts/posts').then(({ default: posts }) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === '#album') {
    // mainElement.appendChild(album())
    // 会打包到  album.bundle.js 中
    import(/* webpackChunkName: 'album' */'./album/album').then(({ default: album }) => {
      mainElement.appendChild(album())
    })
  }
```