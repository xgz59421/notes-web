```js
1. npm i vue
   npm i vue-loader vue-template-compiler -D

2. 配置 vue-loader
{
  test: /\.vue$/,
  use: ['vue-loader']
}
plugins: [
    new VueLoaderPlugin()
]

// vue-loader@^14 直接使用
// vue-loader@^15 new VueLoaderPlugin()
// vue-loader@^16 (不可用， 待验证)

```