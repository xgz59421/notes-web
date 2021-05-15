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
    // 配置带有hash的.js 解决缓存  
    filename: '[name]-[contenthash:8].bundle.js'
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
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
    new MiniCssExtractPlugin({
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
