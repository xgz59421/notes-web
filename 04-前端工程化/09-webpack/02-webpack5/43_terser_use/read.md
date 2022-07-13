#### terser
github.com/terser/terser
terser 工具 解析压缩 js
webpack5 内置
```js
npx terser ./index -o ./index.min.js
npx terser ./index -o ./index.min.js -c -m
npx terser ./index -o ./index.min.js -c -m toplevel=true
npx terser ./index -o ./index.min.js -c -m toplevel=true ,keep_fnames=true, keep_classnames=true

// minimize=true 时, terser 才可以使用
// 正常情况 new TerserPlugin() 正常这么使用就够了， 无需太多配置
optimization: {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin({
      extractComments: false
    })
  ]
},
```