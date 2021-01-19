// -严格模式 "use strict"

// 1.不允许给为声明的变量赋值
// "use strict";
// n = 90; 
// console.log(n);

// 2.自调用函数
// "use strict";
// var salary = 10000;
// (function () {
//     salry = 9000; //如果非严格模式下 这个salry会定义到window全局下
//     console.log(salary);
// })();

// 3.静默失败(改变常量)不报错也没有任何效果 
// 根据浏览器不同,效果也不一样
// "use strict";
// const PI = 3.14;
// PI = 3;
// console.log(PI);

// 4.设置禁止删除
// "use strict";
// var lilei = {
//     sname: "li lei",
//     sage: 18
// }
// //设置禁止删除lilei的 sname属性 
// Object.defineProperty(
//     lilei,
//     "sname", {
//         configurable: false
//     }
// );
// //尝试删除lilei对象的 __proto__属性
// delete lilei.__proto__
// delete lilei.sname
// console.log(lilei);

// 5.delete Object.prototype
// "use strict";
// delete Object.prototype;
// console.log(Object.prototype);

// 6. eval()
// "use strict";
// 严格模式下 eval的局部不会影响全局
// var x = 19;
// eval(
//    //eval的局部作用局
//    "var x = 42; console.log(x)"
// );
// console.log(x);

// 7. 严格模式下 形参值不会发生变化
// "use strict";
// (function (a) {
//   a++;
//   console.log(arguments[0]);
// })(10);

// 8. 严格模式下arguments.callee不可以调用
// 斐波那契数列 f1 = 1, f2 = 1, fn = f(n-1) +f(n-2);
// "use strict";
// var f = function (n) {
//   //严格模式下arguments.callee不可以调用
//   var fn = arguments.callee;
//   if (n < 3) {
//       return 1;
//   } else {
//       return fn(n - 1) + fn(n - 2);
//   }
// }
// console.log(f(10));
// var f1 = function (n) {
//   if (n < 3) {
//       return 1;
//   } else {
//       var f1 = 1,
//         f2 = 1,
//         fn;
//       for (let i = 3; i <= n; i++) {
//         fn = f1 + f2;
//         f1 = f2;
//         f2 = fn;
//       }
//       return fn;
//   }
// }
// console.log(f1(10));
