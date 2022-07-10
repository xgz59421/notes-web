## gulp的组合任务

```js
// 让多个任务按照顺序依次执行
// yarn gulp foo
exports.foo = series(task1, task2, task3)

// 让多个任务同时执行
// yarn gulp bar
exports.bar = parallel(task1, task2, task3)
```