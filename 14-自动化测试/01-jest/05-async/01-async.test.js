function getData(callback) {
  setTimeout(() => {
    callback({ foo: "bar" })
  }, 3000)
}

// 错误的做法
// 没有等待异步操作的执行
// test('async test', () => {
//   getData((data)=>{
//     expect(data).toEqual({ foo: "bar" })
//   })
// })

// Jest会等done回调函数执行结束后，结束测试
// 若 done() 函数从未被调用，测试用例会正如你预期的那样执行失败（显示超时错误）。
// 若 expect 执行失败，它会抛出一个错误，后面的 done() 不再执行。 若我们想知道测试用例为何失败，我们必须将 expect 放入 try 中，将 error 传递给 catch 中的 done函数。 否则，最后控制台将显示一个超时错误失败，不能显示我们在 expect(data) 中接收的值。
test('async test', (done) => {
  getData(data=>{
    done()
    expect(data).toEqual({ foo: "bar" })
  })
})
