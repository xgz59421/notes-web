const fs = window.require('fs').promises
const { remote } = window.require('electron')
// 自定义一个当前磁盘里存放文件的路径
export const savedPath = remote.app.getPath('documents') + '/electron'
console.log('文件存放位置', savedPath)

// 判断是否有目录
export const checkSaveDir = async () =>{
  try {
    fs.opendir(savedPath)
  } catch (err) {
    console.log(err)
    // 没有则创建一个文件
    fs.mkdir(savedPath).then(() => console.log('创建', savedPath))
  }
}

export const readFile = (path) => {
  return fs.readFile(path, 'utf-8')
}

export const writeFile = (path, content) => {
  return fs.writeFile(path, content, 'utf-8')
}

export const renameFile = (path, newPath) => {
  return fs.rename(path, newPath)
}

export const deleteFile = (path) => {
  return fs.unlink(path)
}


// node helper.js 测试时候去掉 export 去掉window
// const path = require('path')
// let testPath = path.join(__dirname, '../test/test.md')
// console.log('testPath', testPath)
// writeFile(testPath, '# test1').then(()=>console.log('success'))