const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    // 自定义配置 生产环境
    // 放入minimizer 原因,  生产环境自动开启minimizer
    minimizer: [
      // 内置的 js压缩插件
      new TerserWebpackPlugin(),
      // 开发环境不进行压缩
      // 压缩`css`输出
      // 配合new MiniCssExtractPlugin() 使用
      // yarn add optimize-css-assets-webpack-plugin --dev
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 将样式通过 style 标签注入
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dynamic import',
      template: './src/index.html',
      filename: 'index.html'
    }),
    // 按需加载CSS样式
    // 注意修改 css loader
    // 去掉`style-loader` 替换为 MiniCssExtractPlugin.loader
    // const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    // 压缩配置
    // 配合optimization下 minimizer下 new OptimizeCssAssetsWebpackPlugin() 
    // yarn add mini-css-extract-plugin --dev
    new MiniCssExtractPlugin()
  ]
}
