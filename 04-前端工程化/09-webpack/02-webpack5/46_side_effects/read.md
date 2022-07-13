```js
sideEffects: true,  使用模块副作用 (默认)
sideEffects: false, 不使用模块副作用
  (index.js 使用不了 utils.js的 window.utils = '1111' )

// 指定哪些文件可以使用副作用
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
  ],
  sideEffects: true,
},

"sideEffects": [
  "./src/title.js"
],
```