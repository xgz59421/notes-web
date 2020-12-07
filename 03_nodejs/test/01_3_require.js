//模块
// (function (exports,require,module,__filename,__dirname) {
//
// })
//exports导出(内容是对象)

//require 引入另一个模块

console.log("以./路径开头 begin------------------------ ")

//同一级必须加 ./    .js可省略
const obj = require("./01_3_exports.js");
console.log(obj);

//引入目录 会自动找index.js, 如果没有 会找package.json
const obj2 = require("./01_3_require");
console.log(obj2)
//引入目录 如果没有index.js 会找package.json
const obj3 = require("./01_3_require/web");
console.log(obj3.add(1,2))

console.log("以./路径开头 end------------------------ ")

console.log("不以./路径开头 begin------------------------ ")
//会自动到以同级向上查找 node_modules 文件夹 路径中寻找
const obj4 = require("test_require");
console.log(obj4)