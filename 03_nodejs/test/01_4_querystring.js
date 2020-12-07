//引入查询字符串模块
const querystring = require("querystring");
console.log(querystring)
let str = "kw=dell&price=4999.00";
//解析查询字符串为对象
var obj = querystring.parse(str);
console.log(obj)

//将对象格式化为 查询字符串
let obj2 = {
    lid:18,
    title:"dell"
}
var str2 = querystring.stringify(obj2);
console.log(str2)


//test
let str1 = "www.codey.com/shopping?title=dell&spec=i7";
var lastindx = str1.lastIndexOf("?");
var substring = str1.slice(lastindx+1);
// console.log(substring)
var obj3 = querystring.parse(substring);
console.log(obj3)