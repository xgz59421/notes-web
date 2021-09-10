const express = require('express')
// 第三方中间件  http request logger 
// npm i morgan
const morgan = require('morgan')

const app = express()

// 以以下格式输出到 node控制台

// 默认
// app.use(morgan('tiny'))
// 自定义
// app.use(morgan(':method :status :res[content-length] - :response-time ms'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
