const path = require('path')

module.exports = {
  mode: 'production', // development
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require('autoprefixer'),
          //         require('postcss-preset-env')
          //       ]
          //     }
          //   }
          // }
          // 使用 postcss.config.js
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 使用 postcss.config.js
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // require('autoprefixer'),
          //         require('postcss-preset-env')
          //       ]
          //     }
          //   }
          // }
          'less-loader'
          
        ]
      }
    ]
  }
}