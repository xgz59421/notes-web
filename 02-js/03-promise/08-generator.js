// 生成器函数

function * foo () {
  console.log('start')
  try {
    let res = yield 'foo'
    // 得到传递过来的值 'bar'
    console.log(res)
    yield 'test1'
    yield 'test2'
  } catch (e) {
    console.log(e)
  }
}

// 调用函数, 不会执行函数, 而是得到了生成器对象
const generator = foo()

let result = generator.next()
console.log(result)
console.log('end')

// 向生成器传值
result = generator.next('bar')
console.log(result)

result = generator.next()
console.log(result)

result = generator.next()
console.log(result)

// generator.throw(new Error('Generator error'))

