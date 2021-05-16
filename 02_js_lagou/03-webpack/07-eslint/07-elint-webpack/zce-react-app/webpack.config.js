const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: 'babel-loader'
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

// 安装 eslint 模块
// yarn add eslint --dev
// 安装 eslint-loader 模块
// yarn add eslint-loader --dev
// 初始化 .eslintrc.js 配置文件
// yarn eslint --init