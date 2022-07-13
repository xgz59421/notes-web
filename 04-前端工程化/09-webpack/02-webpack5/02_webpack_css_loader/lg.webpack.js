const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, // 一般就是一个正则表达式，用于匹配我们需要处理的文件类型
      //   use: [
      //     {
      //       loader: 'css-loader'
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader'
      // },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}