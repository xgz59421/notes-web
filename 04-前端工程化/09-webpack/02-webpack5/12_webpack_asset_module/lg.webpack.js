const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: "img/[name].[hash:4][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      // {
      //   test: /\.(png|svg|gif|jpe?g)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: "img/[name].[hash:4][ext]"
      //   }
      // },
      // {
      //   test: /\.(png|svg|gif|jpe?g)$/,
      //   type: 'asset/inline'
      // }
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:4][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      }
    ]
  }
}


