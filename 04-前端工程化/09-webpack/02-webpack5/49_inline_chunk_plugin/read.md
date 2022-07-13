#### inline-chunk-html-plugin
```js
如果产出的js, 不是很大， 可以把文件 注入到 html
如下 把runtime~index.9ff3c23b.bundle 注入到 index.html中
new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/])

```