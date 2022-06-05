function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ foo: "bar" })
      getData()
    }, 300000)
  })
}

// mock 定时器
jest.useFakeTimers()


test('promise test1', () => {
  expect.assertions(1)
  getData().then(data => {
    expect(data).toEqual({ foo: "bar" })
  })
  // 解决循环定时器问题
  jest.runOnlyPendingTimers()
  
  // jest.runAllTimers()
})