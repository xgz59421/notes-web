
var obj = { x: 1,y: 2,z: 3 };

var { x: x, y: y, z: z } = obj;
console.log(x, y, z);
//简写: 即当做配对,又当做变量名
var { x, y, z } = obj;
console.log(x, y, z);

// 剩余运算符
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a, b, rest);

var user = {
  uname: "dingding",
  realName: "丁丁",
  login: function () {
     console.log("登录.....");
  }
}
var { uname, login } = user;
console.log(uname);
login();