```js
'ts-loader' 处理不了 ts中的promise
'bable-loader' 处理 ts中的promise, 但是不能发现ts编译中的语法错误

解决 'bable-loader' 中不能校验ts语法错误
"scripts": {
  "build": "npm run ck && webpack", //tsc 配合着 'bable-loader' 使用
  "ck": "tsc --noEmit"  可以校验ts语法错误, 并且不打包文件
}
```