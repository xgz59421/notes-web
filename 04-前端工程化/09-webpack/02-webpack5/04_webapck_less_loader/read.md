```js
安装: npm install --save-dev less-loader less
命令行单独使用 less: npx lessc ./src/css/login.less ./dist_less/index.css

loader使用 'less-loader': 
{
  test: /\.less$/,
  use: ['style-loader', 'css-loader', 'less-loader']
}
```

