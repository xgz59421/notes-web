// 1 资源： cpu 内存
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// 2 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
console.log(process.cwd())
console.log(process.version)
// console.log(process.versions)
console.log(process.arch)
// console.log(process.env)
console.log(process.env.NODE_ENV)
// 环境变量
// console.log(process.env.PATH)
// 管理员目录
console.log(process.env.USERPROFILE)  // HOME
console.log(process.platform)

// 3 运行状态： 启动参数、PID、运行时间
// node .\05-process.js 1 2
console.log(process.argv)
console.log(process.argv0)  // execArgv
console.log(process.pid)  // ppid 

// setTimeout(() => {
  // 运行时间
  console.log(process.uptime())
// }, 3000)

// 4. 事件
// process.on('exit', (code)=>{
//   console.log('exit' + code);
// })

// process.on('beforeExit', (code)=>{
//   console.log('beforeExit' + code);
// })
console.log('代码执行完毕');
// process.exit(); // 退出程序

// 5. 标准输出 输入 错误
console.log = function (data) {
  process.stdout.write('----' + data + '\n')
}
console.log('1111');

const fs = require('fs')
fs.createReadStream('text.txt').pipe(process.stdout)

// 输入 (需要输入)
// process.stdin.pipe(process.stdout)

process.stdin.setEncoding('utf-8')
process.stdin.on('readable', ()=>{
  let chunk = process.stdin.read()
  if (chunk != null) {
    process.stdout.write('data' + chunk )
  }
})