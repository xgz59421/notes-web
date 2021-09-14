const express = require('express')
const UserDB = require('./mongodb')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 注册接口  http://ip地址:9000/register  可以正常注册
app.post('/register', async (req, res, next)=>{
  try {
    let user = new UserDB(req.body)
    await user.save()

    user = user.toJSON()
    delete user.password

    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
})
// 登录接口  http://ip地址:9000/login   可以正常登录
app.post('/login', async (req, res, next)=>{
  try {
    let {username, password} = req.body
    console.log(username, password);
    let user = await UserDB.find({
      username,
      password
    })
    res.status(200).json({
      user
    })
  } catch (error) {
    next(error)
  }
})
// 用户查询接口  http://ip地址:9000/  注册的用户名
app.get('/', async(req, res)=>{
  try {
    let users = await UserDB.find()
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
})

app.use((err, req, res, next) => {
  console.log('错误', err)
  res.status(500).json({
    error: err.message
  })
})

app.listen(9000, () => {
  console.log('running...')
})