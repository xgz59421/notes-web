function getData() {
  return new Promise((resolve, reject) => {
    // reject('hello')
    setTimeout(() => {
      resolve({ foo: "bar" })
    }, 3000)
  })
}

// 错误的做法
// 没有等待异步操作的执行
// test('async test', () => {
//   getData((data)=>{
//     expect(data).toEqual({ foo: "bar" })
//   })
// })

// 方式1
test('promise test1', (done) => {
  getData().then(data => {
    done()
    expect(data).toEqual({ foo: "bar" })
  })
})

// 方式2
test('promise test2', () => {
  return getData().then(data => {
    expect(data).toEqual({ foo: "bar" })
  })
})

// 方式3
test('promise test3', () => {
  return expect(getData())
          .resolves.toEqual({ foo: "bar" })
})
// test('promise test3', () => {
//   return expect(getData())
//           .rejects.toMatch("hello")
// })

// 方式4
test('promise test4', async () => {
  const data = await getData()
  expect(data).toEqual({foo: "bar"})
})

// test('promise test4', async () => {
//   try {
//     await getData()
//   } catch (error) {
//     expect(error).toMatch("hello")
//   }
// })