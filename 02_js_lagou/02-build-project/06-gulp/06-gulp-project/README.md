```js
`gulpfile.js`:
module.exports = {
  clean,  // 删除 temp / dist 文件
  build,  // 删除/复制/压缩/打包dist
  develop // 复制/开启服务器进行开发
}

`package.json`:
"scripts": {
  "clean": "gulp clean",
  "build": "gulp build",
  "develop": "gulp develop"
}

`npm run clean` / `yarn clean`
`npm run build` / `yarn build`
`npm run develop` / `yarn develop`
```