const http = require('http')
// node 是单线程

function sleepTime (time) {
  // 休眠四秒会阻断后续开启服务
  const sleep = Date.now() + time * 1000
  while(Date.now() < sleep) {}
  return 
}
sleepTime(4)
const server = http.createServer((req, res) => {
  res.end('server starting......')
})

server.listen(8080, () => {
  console.log('服务启动了')
})