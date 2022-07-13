```js
url-loader： base64 uri
{
  test: /\.(png|svg|gif|jpe?g)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'img/[name].[hash:6].[ext]',
        limit: 25 * 1024
      }
    }
  ]
}

1. url-loader: 会把图片转换为 base64 uri 存放于打包js中
  好处: 减少请求次数
  快出: js体积大
2. 'url-loader' 包含 'file-loader'
3. 设置 limit: 小于临界值的， 则打包为base64
```