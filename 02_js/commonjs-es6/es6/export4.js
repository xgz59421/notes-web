//export4.js
// 导出 default

var a = 111
var b = 222
var c = 333
var d = 444
var e = 555
var f = 666

function add(n1, n2){
  return n1 + n2
}

export function getCompanyName(){
  return 'Tedu达内教育'
}

//普通的导出方式 export {}
//引入时需要 import * as 别名 from xxx

//default方式导出:
//引入时 import 别名 from xxxx
//使用者可以省略 * as 
export default {
  a, b, c, d, e, f, add, getCompanyName
}