```js
MiniCssExtractPlugin
  需要 webpack 5 才能工作
  该插件将 CSS 提取到单独的文件中

// 打包 分离css, 开发使用style.loader
{
  test: /\.css$/,
  use: [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        esModule: false
      }
    },
    'postcss-loader'
  ]
}

optimization: {
  minimizer: [
    // 压缩css
    new CssMinimizerPlugin()
  ]
},
plugins: [
  // 分离css
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash:8].css'
  })
]
```