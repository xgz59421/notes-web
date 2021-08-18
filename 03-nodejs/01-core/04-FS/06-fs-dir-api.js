const fs = require('fs')

// 一、access: 一般判断目标是否存在
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('有操作权限')
//   }
// })

// 二、stat: 文件信息
// fs.stat('a.txt', (err, statObj) => {
//   // console.log(statObj)
//   console.log(statObj.size)
//   console.log(statObj.isFile())
//   console.log(statObj.isDirectory())
// })

// 三、mkdir: 创建目录 
// recursive: 没有a目录则创建目录
// fs.mkdir('a/b/c', {recursive: true}, (err) => {
//   if (!err) {
//     console.log('创建成功')
//   }else{
//     console.log(err)
//   }
// })

// 四、rmdir: 删除目录
// 默认删除非空目录
// recursive: true 递归删除
// fs.rmdir('a', {recursive: true}, (err) => {
//   if (!err) {
//     console.log('删除成功')
//   } else {
//     console.log(err)
//   }
// })

// 五、readdir 
fs.readdir('a/b', (err, files) => {
  console.log(files)
})

// 六、unlink: 删除文件
/* fs.unlink('a/a.txt', (err) => {
  if (!err) {
    console.log('删除成功')
  }
}) */