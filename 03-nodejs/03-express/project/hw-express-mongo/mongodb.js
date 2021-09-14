const mongoose = require('mongoose')

// 连接 MongoDB 数据库
mongoose.connect('mongodb://117.50.15.6:27017/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
// 当连接失败的时候
db.on('error', err => {
  console.log('MongoDB 数据库连接失败', err)
})
// 当连接成功的时候
db.once('open', function () {
  console.log('MongoDB 数据库连接成功')
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    // set: value => md5(value),
    select: false
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('UserDB', userSchema)