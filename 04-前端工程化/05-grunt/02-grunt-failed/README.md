#### 标记任务失败
```js
// 任务函数执行过程中如果返回 false
// 则意味着此任务执行失败
grunt.registerTask('bad', () => {
  console.log('bad working~')
  return false  
})

//如果一个任务列表中的某个任务执行失败
// 则后续任务默认不会运行
```