#### eslint 结合自动化工具(这里用gulp)
```js
安装 https://github.com/zce/zce-gulp-demo.git

npx eslint --init
npx gulp script

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())  // 控制台打印信息
    .pipe(plugins.eslint.failAfterError())  // 终止任务管道
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}

```