const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
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
    },
    {
      test: /\.(ttf|woff2?)$/,
      type: 'asset/resource',
      generator: {
        filename: 'font/[name].[hash:3][ext]'
      }
    },
    {
      test: /\.js$/,
      use: ['babel-loader'] // 外部配置预设 bable.config.js
      // use: [
      // {
      //   loader: 'babel-loader',
      //   options: {
      //     // // 方法1
      //     // plugins: [
      //     //   '@babel/plugin-transform-arrow-functions',
      //     //   '@babel/plugin-transform-block-scoping'
      //     // ],
      //     // // 方法2
      //     // presets: ['@babel/preset-env']
      //     // // 方法3 过滤 .browserslistrc配置
      //     // presets: [
      //     //   [
      //     //     '@babel/preset-env',
      //     //     {
      //     //       // targets: 'chorme 91'
      //     //       // targets: 'last 4 version'
      //     //       targets: [
      //     //         ">1%",
      //     //         "last 2 version",
      //     //         "not dead"
      //     //       ]
      //     //     }
      //     //   ]
      //     // ]
      //   }
      // }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'copyWebpackPlugin',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: 'public',
        globOptions: {
          ignore: ['**/index.html']
        }
      }]
    })
  ]
}