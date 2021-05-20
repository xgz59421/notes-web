## tapable 独立的库
```js
webpack属于 事件驱动型事件流工作机制
`webpack编译流程`
1. 配置初始化
2. 内容编译
3. 输出编译后的内容
```
```js
`tapable工作流程`
1. 实例化hook注册事件监听
2. 通过hook触发事件监听
3. 执行懒编译生成的可执行代码
```
```js
`hook本质是 tapable的实例对象`
`hook执行机制可分为同步和异步`
`hook执行特点`
`hook`: 普通钩子, 监听之间互不影像
`bailhook`: 熔断钩子, 某个监听返回undefined时后续不再执行
`waiterfallhook`:瀑布沟子, 上一个监听的返回值,传递给下一个
`loophook`:循环钩子, 如果当前未返回false 则一直执行
```
```js
`tapable库同步钩子`
1. synckhook
2. syncbailhook
3. syncwaterfallhook
4. syncloophook
```
```js
`tapable库异步钩子`
1. tapable库`异步串行钩子`
  1. asyncserieshook
  2. asyncseriesbailhook
  3. asyncserieswaterfallhook
  
2. tapable库`异步并行钩子`
  1. asyncparallehook
  2. asyncparallebailhook
```