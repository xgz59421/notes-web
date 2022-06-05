const { sum, subtract } = require("./demo")

test('测试加法', () => {
  expect(sum(1, 2)).toBe(3)
})

test('测试减法', () => {
  expect(subtract(2, 1)).toBe(1)
})

function test (description, callback) {
  try {
    callback()
    console.log(`${description} 通过测试`)
  } catch (err) {
    console.error(`${description} 没有通过测试：${err}`)
  }
}

function expect (result) {
  return {
    toBe (actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不相等，预期 ${result}，结果确实 ${actual}`)
      }
    }
  }
}