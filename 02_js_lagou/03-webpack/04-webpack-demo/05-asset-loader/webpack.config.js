const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.css',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  // webpack 默认只压缩js, 其他类型文件 使用module进行配置
  module: {
    rules: [
      {
        test: /.css$/,
        // 配置多个loader, 会从后向前执行
        // 这里会先执行 css-loader, 再执行 style-loader
        use: [
          'style-loader',  // 把转换后的结果追加到页面上
          'css-loader'
        ]
      }
    ]
  }
}
