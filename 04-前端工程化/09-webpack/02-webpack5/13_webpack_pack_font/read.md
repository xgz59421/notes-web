```js
'asset/resource' 本例拷贝字体资源
{
  test: /\.(ttf|woff2?)$/,
  type: 'asset/resource',
  generator: {
    filename: 'font/[name].[hash:3][ext]'
  }
}

```