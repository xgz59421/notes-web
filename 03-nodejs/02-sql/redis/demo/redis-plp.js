// Redis 综合案例

/**
 * 微信有几亿的用户群，某一时刻可能有几千上万人同时在玩漂流瓶
 * 对于这种高并发数据量小的服务，使用 Node.js 和 Redis 绝对是一个推荐的选择
 */

// 接口设计
/** 1.打捞漂流瓶:
 * 
 * 请求方法：GET
 * 请求路径：/
 * 查询参数：
 *   user：捡漂流瓶的人的用户名或用户ID，必须唯一
 *   type：漂流瓶类型,三种类型：
      all：全部
      male：男性
      female：女性
 * 成功返回:{
    "code": 1,
    "msg": {
      "time": "xxx",
      "owner": "xxx",
      "type": "xxx",
      "content": "xxx"
    }
  }
 * 失败返回{    "code": 0,  "msg": 0}
 */

/** 2.扔出一个漂流瓶:
 * 请求方法：POST
 * 请求路径：/
 * 请求体参数：
    time：漂流瓶扔出的时间戳，默认时设置为 Date.now()
    owner：漂流瓶主人，可以是用户名或用户 ID，但必须仅有1个
    type：漂流瓶类型，为 male 或 female 之一
    content：漂流瓶内容
 * 成功返回：{    "code": 1,  "msg": "xxx"}
 * 失败返回：{    "code": 0,  "msg": "xxx"}
 */

const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid'); 
const ioredis = require('ioredis')
// bodyParser 弃用了
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 建立连接
const redis = new ioredis({
  // port: 6379,
  port: 4000,
  host: '106.75.154.132',
  // 降低性能, 生产环境设置为false或删除掉
  showFriendlyErrorStack: true
})

// 扔一个漂流瓶
app.post('/', async (req, res, next) => {
  try {
    const bottle = req.body
    // 为每个漂流瓶随机生成一个不重复的 id
    const bottleId = uuidv4()
    const time = new Date()
    // const type = {
    //   male: 0,
    //   female: 1
    // }

    // 根据漂流瓶类型的不同将漂流瓶保存到不同的数据库
    // 主要目的是为了方便使用 Redis 中的 RANDOMKEY 命令：该命令返回当前数据库中的一个随机键，不能加任何条件
    // await SELECT(type[bottle.type])
 
    // 将数据存为哈希
    // await HMSET(bottleId, bottle)

    await HSET(bottleId, bottle, time)

    // 设置漂流瓶生存期为 1 天
    // await EXPIRE(bottleId, 60 * 60 * 24)

    res.status(200).json({
      code: 1,
      msg: {
        id: bottleId,
        ...bottle,
        time
      }
    })
  } catch (err) {
    next(err)
  }
})

// 捡一个漂流瓶
app.get('/', async (req, res, next) => {
  try {
    const query = req.query
    let { type, user} = query;
    // if (!user) {
    //   return res.send('没有用户id');
    // }
    if (!type) {
      // 没有传参type 随机一下
      let typeArr = ['male', 'female']
      type = typeArr[Math.floor(Math.random() * typeArr.length)];
    }

    // 随机返回一个漂流瓶 ID
    const bottleId = await RANDOMKEY()

    if (!bottleId) {
      res.status(200).json({
        message: '大海空空如也...'
      })
      return 
    }
    // 根据漂流瓶 ID 获取完整的漂流瓶信息
    const bottle = await HGEBottle(bottleId)
    res.status(200).json({
      code: 1,
      msg: {
        ...bottle
      }
    })
    // 从 Redis 中删除捡到的漂流瓶
    // DEL(bottleId)
  } catch (err) {
    console.log(err)
    next(err)
  }
  // res.send('get /')
})

// 统一处理异常
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message
  })
})

app.listen(5000, () => {
  console.log('running...')
})


async function HSET(bottleId, bottle, time){
  try {
    redis.hset(bottleId, {
      "id": bottleId,
      time,
      ...bottle
    }, (err, ret)=>{
      if (err) {
        return console.log('写入失败', err)
      }
      console.log('写入成功', ret)
    })
  } catch (error) {
    console.log('操作失败', error)
  }
}

// 返回瓶子keys
async function RANDOMKEY(){
  let rdm_id;
  try {
    let array = await redis.keys("*")
    if (array) {
       rdm_id = array[Math.floor(Math.random() * array.length)];
    }
    return rdm_id
  } catch (error) {
    console.log('操作失败', error)
  }
}

async function HGEBottle(id) {
  try {
    let ret = await redis.hmget(id, "id", "time", "owner", "type", "content")
    return ret
  } catch (error) {
    console.log('操作失败', error)
  }
}