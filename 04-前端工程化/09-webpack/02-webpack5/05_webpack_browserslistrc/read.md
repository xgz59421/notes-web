```js
1. 工程化： 
2. 兼容性： CSS JS 
3. 如何实现兼容：
4. 到底要兼容哪些平台

- caniuse.com  搜 'Browser usage table'
查找出默认条件配置: npx browserslist

>1%:  找到市面上浏览器占有率 >1%
dead 24个月内没有更新的浏览器, 视为废弃的浏览器
last 2 version：最后两个版本

.browserslistrc 内配置
> 1% 
last 2 version
not dead   // 24个月内还一直在更新的浏览器

package.json 内配置
"browserslist": [
  ">1%",
  "last 2 version",
  "not dead"
]
```