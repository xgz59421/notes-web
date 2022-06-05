function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test('mock', () => {
  // const item = [1, 2, 3]

  const mockCallback = jest.fn(x => 42 + x)
  forEach([0, 1], mockCallback)
  console.log(mockCallback.mock)
  // 设置 所有mockCallback 函数 返回值为100
  // mockCallback.mockReturnValue(100)

  // 设置 第1个mockCallback 函数 返回值为100
  // mockCallback.mockReturnValueOnce(100)
  
  // 设置 第2个mockCallback 函数 返回值为100
  // mockCallback.mockReturnValueOnce(101)

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1)

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42)
})