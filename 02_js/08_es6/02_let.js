// (1). 在相同作用域内，禁止反复生成两个相同的let变量
// (2). 因为不会被声明提前，所以不允许提前使用let的变量
// (3). 即使在全局let一个变量，在window中竟然找不到！

// console.log(b); //报错: b is not defined
// let b = 2;    //let不能提升作用域
// let b = 4;   //报错: let不可以反复声明

//块级作用域
// {
//   // var c = 3;
//   let c = 3;
// }
// console.log(c) //访问不到 let c

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     // 如果在浏览器下 i是window.i
//     console.log(i);
//   }, 100);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

