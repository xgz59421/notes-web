const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // mode: 'none',
  // stats: 'none',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

// 查看测试
// npm start -- 01-promise-start.js