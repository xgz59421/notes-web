```js
配置'file-loader'中图片打包的目录及名字

{
  loader: 'file-loader',
  options: {
    name: 'img/[name].[hash:6].[ext]',
    // outputPath: 'img'
  }
}

options.name 配置
1. [ext]: 扩展名
2. [name]: 文件名
3. [hash]: 哈希结合文件内容
   [hash:<length>]
4. [contentHash]: 与'hash'一样
5. [path]: 配置文件路径

```