const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
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
  }
}
