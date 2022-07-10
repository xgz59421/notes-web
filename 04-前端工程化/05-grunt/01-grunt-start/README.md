
## grunt

##### 安装 
1. yarn init --yes
2. yarn add grunt
2. code gruntfile.js (新建入口文件, 并注册任务foo)

#### 运行
gruntfile.js
```js
// 第1个参数为任务名
// 第2个参数如果是字符串, 则为描述信息
grunt.registerTask('foo', 'a sample task', () => {
  console.log('hello grunt')
})
// yarn grunt foo
// yarn grunt --help  描述信息(第二个参数)
```

```js
grunt.registerTask('default', ['foo', 'bar'])
// yarn grunt  (依次执行, foo, bar)
```

```js
// 处理异步
grunt.registerTask('async-task', function () {
  const done = this.async()
  // 异步任务必须 this.async
  setTimeout(() => {
    console.log('async task working~')
    done()
  }, 1000)
})
```
