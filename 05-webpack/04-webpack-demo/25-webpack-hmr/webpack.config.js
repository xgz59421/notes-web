const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
        // 遇到错误, 不回退到自动刷新, 不会报错
    // hot: true
    // 只使用 HMR，不会 fallback 到 live reloading
    // 也就是说, hotOnly热替换, 遇到错误, 会报错, 不会自动刷新
    hotOnly: true 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Tutorial',
      template: './src/index.html'
    }),
    // 热替换模块 
    // 实时替换运行应用的某个模块, 不必完全刷新应用
    new webpack.HotModuleReplacementPlugin()
    // 或者
    // --open 默认打开浏览器
    // --hot 开启热替换
    //  yarn webpack-dev-server --open --hot
  ]
}
