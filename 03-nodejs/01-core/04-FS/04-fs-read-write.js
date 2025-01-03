// 大文件读写操作

const fs = require('fs')

// read ： 所谓的读操作就是将数据从磁盘文件中写入到 buffer 中
let buf = Buffer.alloc(10)

/**
 * fd 定位当前被打开的文件 
 * buf 用于表示当前缓冲区
 * offset 表示当前从 buf 的哪个位置开始执行写入
 * length 表示当前次写入的长度
 * position 表示当前从文件的哪个位置开始读取
 */
/* fs.open('data.txt', 'r', (err, rfd) => {
  console.log(rfd)
  fs.read(rfd, buf, 0, 4, 3, (err, readBytes, data) => {
    console.log(readBytes)  // 读了多少个字节
    console.log(data)
    console.log(data.toString())
  })
}) */

// write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from('1234567890')
fs.open('b.txt', 'w', (err, wfd) => {
  // @param3 读的起始位置
  fs.write(wfd, buf, 1, 4, 0, (err, written, buffer) => {
    console.log(written) // 实际写入的字节数量
    console.log(buffer.toString())
    fs.close(wfd)
  })
})