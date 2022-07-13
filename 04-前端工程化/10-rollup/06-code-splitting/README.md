## rollup 代码拆分

```js
通过动态导入实现 代码拆分

index.js: 
import('./logger').then(({ log }) => {
  log('code splitting~')
})
```