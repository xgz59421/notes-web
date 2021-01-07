//创建Buffer空间，存储数据
var buf = Buffer.alloc(6,'然桑');
console.log(buf);
//将buffer数据转为字符串
console.log(String(buf));
console.log(buf.toString());