function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ foo: "bar" })
    }, 300000)
  })
}

// mock 定时器
jest.useFakeTimers()

test('promise test1', () => {
  // 至少断言一次
  expect.assertions(1)
  getData().then(data => {
    expect(data).toEqual({ foo: "bar" })
  })

  // “快进”时间使得所有定时器回调被执行
  jest.runAllTimers()
})
