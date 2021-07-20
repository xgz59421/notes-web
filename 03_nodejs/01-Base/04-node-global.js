// console.log(global)

console.log('__filename:', __filename)
console.log('__dirname:', __dirname)

console.log('this:', this)

// 默认情况 this 是空对象，和 global 并不是一样的

console.log(this == global);

(function () {
  console.log(this == global)
})()

/* require('module')
__filename
__dirname
module 
exports  */