
//构造函数所包含
console.log("这是 module2.js")
let a = 1;
function fn(){
    return 2;
}
//导出
//导出的内容是对象

//第一种导出,导出的是别名,一般用第二种
exports.a = a;
exports.fn = fn;


var emp = {
    name: "tom",
    age: 18,
    say:function () {
        console.log("hello")
    }
}
//第二种导出
module.exports = emp;