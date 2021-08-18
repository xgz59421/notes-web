/**
 * 需求：“拉勾教育” 写入指定的文件
 * 01 一次性写入
 * 02 分批写入
 * 对比：
 */
let fs = require('fs')

// 一次性写入
// let ws = fs.createWriteStream('test.txt')
// ws.write('拉勾教育')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

let source = "拉勾教育".split('')
let num = 0
let flag = true

function executeWrite () {
  flag = true
  while(num !== 4 && flag) {
    flag = ws.write(source[num]) //写完3个字节, flag = false
    num++
  }
}
executeWrite()

// 分批写入
ws.on('drain', () => {
  console.log('drain 执行了')
  // flag = false 会执行此函数
  executeWrite()
})

// pipe 更好的方法
