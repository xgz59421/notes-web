css tree shaking
```js

plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
      // 保护列表, 不被tree shaking掉
      safelist: function () {
        return {
          standard: ['body', 'html', 'ef']
        }
      }
    })
  ]
```