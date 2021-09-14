/**
 * - Koa 中的 Context 对象
 * 参考：https://koa.bootcss.com/#context
 */
const Koa = require('koa')

const app = new Koa()

// Koa 没有路由系统，只有中间件功能
// ctx: context 上下文对象
//    请求
//    响应

app.use(ctx => {
  // ctx.body = 'Hello Koa'
  // console.log(ctx.req.method)
  // console.log(ctx.req.url)

  // ctx.res.end('res Hello Koa')

  // console.log(ctx.headers)
  console.log(ctx.method)
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
