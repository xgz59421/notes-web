//全局对象

var a = 1;
var fn = function () {
    return 5;
}
//1.global(node.js交互模式)
//gloal.a
// 2.window(浏览器)
// console.log(window.a);       //浏览器查看
// console.log(window.fn());

//3.console对象
console.log(1);
console.info(2);
console.warn(3);
console.error(4);
console.time("for");//for为自定义标签
for (var i = 0; i < 10000; i++) {

}
console.timeEnd("for");

//4.process
console.log(process.platform) //操作系统
console.log(process.arch)   //CPU架构
console.log(process.version) //版本
// console.log(process.env) //环境变量
console.log(process.pid)//当前程序 进程编号
// console.log(process.kill(10608));//系统运行的进程编号 pid(可变的)

//5.Buffer //缓冲区(存储临时数据)
let buf = Buffer.alloc(6,"abcdefg");
console.log(buf)//16进制数据
console.log(buf.toString())
console.log(String(buf))