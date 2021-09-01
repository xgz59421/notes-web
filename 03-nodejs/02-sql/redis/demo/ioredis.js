const ioredis = require('ioredis')

// 建立连接
const redis = new ioredis({
  port: 6379,
  host: '106.75.154.132',
  // 降低性能, 生产环境设置为false或删除掉
  showFriendlyErrorStack: true
})
// 操作 Redis 数据库
// 1. set
//  1.1 get
// 2. promise get
// 3. ansyc await get
// 4. pipeline管道
// 5. 事务操作
// 6. 测试报错

/**
 * 功能1: 基本使用set
 */
// redis.set('foo', 'bar', (err, ret) => {
//   if (err) {
//     return console.log('写入失败', err)
//   }

//   console.log('写入成功', ret)
// })

/**
 * 功能1.1: 基本使用get
 */
// redis.get('foo', (err, ret) => {
//   if (err) {
//     return console.log('获取失败', err)
//   }
//   console.log(ret)
// })

/**
 * 功能2: promise get
 */
redis.get('foo')
  .then(ret => {
    console.log(ret)
  })
  .catch(err => {
    console.log('获取失败', err)
  })

/**
 * 功能3: ansyc await get
 */
// async function main () {
//   try {
//     const ret = await redis.get('foo')
//     console.log(ret)
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }
// main()

/**
 * 功能4: pipeline管道
 * keys * 查看
 */
// async function main () {
//   try {
//     const pipeline = redis.pipeline()
//     for (let i = 0; i < 100; i++) {
//       pipeline.set(`${i}-foo`, i)
//     }
//     const ret = await pipeline.exec()
//     console.log(ret)
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }
// main()

/**
 * 功能5: 事务操作
 */
//  async function main () {
//   try {
//     const ret = await redis
//       .multi()
//       .set('jack', 100)
//       .set('rose', 200)
//       .exec()
//     console.log(ret)
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }
// main()


/**
 * 功能6: 测试报错
 */
// async function main () {
//   try {
//     // 此处报错
//     await redis.set('adbs')
//     console.log('OK')
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }
// main()








