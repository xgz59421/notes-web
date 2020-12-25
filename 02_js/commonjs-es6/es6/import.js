//import.js

//注意区分: 
//commonJS:  require('./export')


/**
 * 注意:
 * 导出的格式 import {} from ''
 * 和 export 对应的单词 import
 * from 从...里导出
 * from后面必须填 路径, 带有js结尾, 是文件名
 * {} 中可以自定义填写 想要引入的内容名
 * 因为 ES6 一个文件中可以导出多个值, 使用者不一定都用到, 那么就可以自定义引入想要的值
 */

//ES6 导出的是多个
import { m, add, Stu } from './export.js'
console.log("------------------export.js-------------------");
//使用时:
console.log(m)  //变量
console.log(add(10, 20)) //30 函数
console.log(Stu) //类
//类使用时, 需要实例化操作
var s = new Stu()
console.log(s.show())

//起别名  as   防止冲突, 把m 别名为 mm
import {m as mm} from './export1.js'
console.log("------------------export1.js-------------------");
console.log(mm)

//引入 : 其中 gender是 sex 的别名
import { name, age, gender } from './export2.js'
console.log("------------------export2.js-------------------");
console.log(name, age, gender)

//导入一个值特别多的
// import { a, b, c, d, e, f} from './export3.js'
// console.log(a, b, c, d)

//偷懒写法:  *是通配符 代表所有, 必须起别名
import * as exp from './export3.js'
console.log("------------------export3.js-------------------");
//使用时, 类似于对象的写法
console.log(exp.a, exp.b, exp.c, exp.d, exp.e)

// exp4 是用 export default {} 导出的
// getCompanyName() 是单独用 export function 导出的
import exp4, {getCompanyName as gcn} from './export4.js'
console.log("------------------export4.js-------------------");

console.log(exp4.a, gcn())
//此写法依然支持, 只是太长了. 用gcn 明显更方便
console.log(exp4.getCompanyName())


/**
 * 测试:
 * 这是ES6 不是 node.js, 不能用 node xx.js来执行
 * 使用在浏览器上, 需要通过 html 文件来显示
 * 创建一个 index.html 文件来执行
 */