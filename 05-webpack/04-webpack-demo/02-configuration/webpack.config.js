const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    // path 要求绝对路径
    path: path.join(__dirname, 'output')
  }
}
