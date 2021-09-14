/**
 * - Koa 的中间件
 * - 中间件执行栈结构（洋葱模型）
 * - 1.同步中间件
 * - 2.异步中间件
 * - 3.中间件的合成
 */
const Koa = require('koa')
const fs = require('fs')
const util = require('util')
const compose = require('koa-compose')
const app = new Koa()


console.log('3 中间件合成, 合并挂载---------------------------');
const a1 = (ctx, next) => {
  console.log('a1')
  next()
}
const a2 = (ctx, next) => {
  console.log('a2')
  next()
}
const a3 = (ctx, next) => {
  console.log('a3')
  next()
}
app.use(compose([a1, a2, a3]))
// app.use(a1)
// app.use(a2)
// app.use(a3)


console.log('2----------------------------------------------');
app.use(async (ctx, next) => {
  const data = await util.promisify(fs.readFile)('./views/index.html')
  ctx.type = 'html'
  ctx.body = data
  next()
})

console.log('1----------------------------------------------');
const one = (ctx, next) => {
  console.log('>> one')
  next() // 此处不写next 不会执行 app.use(two)
  console.log('<< one')
}

const two = (ctx, next) => {
  console.log('>> two')
  next()
  console.log('<< two')
}

const three = (ctx, next) => {
  console.log('>> three')
  next()
  console.log('<< three')
}

app.use(one)
app.use(two)
app.use(three)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
