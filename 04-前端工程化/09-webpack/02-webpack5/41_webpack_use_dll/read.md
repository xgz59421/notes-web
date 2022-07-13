```js
plugins: [
  // 使用打包的dll
  new webpack.DllReferencePlugin({
    context: resolveApp('./'),
    manifest: resolveApp('./dll/react.manifest.json')
  }),
  // <script defer="defer" src="auto/dll_react.js"></script>
  new AddAssetHtmlPlugin({
    outputPath: 'js',
    filepath: resolveApp('./dll/dll_react.js')
  })
]

bug: 
  打包后的 index.html, src= 'auto/...'
  <script defer="defer" src="auto/dll_react.js"></script>
解决: 
  方法1: outputPath: 'auto'
  方法2: 打包后手动修改 src='js/..'

```