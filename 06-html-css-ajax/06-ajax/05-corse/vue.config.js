const path = require('path')
const webpack = require('webpack')
const px2rem = require('postcss-px2rem')
// 基准大小 baseSize，需要和rem.js中相同
const postcss = px2rem({
  remUnit: 75
})

module.exports = {
  // 根路径
  publicPath: './',
  // 构建输出目录
  outputDir: 'dist',
  // 静态资源目录(js, css, img, fonts)
  assetsDir: 'assets',
  // 指定生成的输出路径
  indexPath: 'index.html',
  // 生成的静态资产的文件名
  filenameHashing: true,
  // 是否开启eslint保存检测
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    }
  },
  devServer: {
    // 是否自动打开页面
    open: true,
    // 域名
    host: '0.0.0.0',
    // 端口号
    port: '8090',
    // 是否使用https
    https: false,
    // 热更新
    hotOnly: true,
    proxy: {
      // 配置跨域
      '/': {
        target: 'https://tjexportcdzx-bg.ihxlife.com:8004/',
        ws: true,
        changeOrigin: true,
        // 使用 '/api代替target'
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
