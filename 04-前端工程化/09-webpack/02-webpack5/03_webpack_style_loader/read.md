```js
css-loader

1. css-loader会处理 import / require（） @import / url 引入的内容

2. style-loader 是通过一个JS脚本创建一个style标签，里面包含一些样式。

3. loader是 '从右至左', 或者 '从下到上', 解析的 
   use: ['style-loader', 'css-loader'] 
   {
      test: /\.css$/,
      loader: 'style-loader'
   },{
      test: /\.css$/,
      loader: 'css-loader'
   },
```