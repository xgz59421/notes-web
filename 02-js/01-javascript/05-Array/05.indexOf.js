// array.indexOf(item,start)
// start 可选, 检索的位置
// 返回值: number, 没有检索到返回-1

var arr = [1, 2, 3, 4, 3, 2, 1, 1]
var index = arr.indexOf(3)
console.log(index != -1 ? `在${index}位置发现3` : '没有3了')
index = arr.indexOf(3, index + 1)
console.log(index != -1 ? `在${index}位置发现3` : '没有3了')
index = arr.indexOf(3, index + 1)
console.log(index != -1 ? `在${index}位置发现3` : '没有3了')

// //如果当前浏览器Array的原型对象中没有indexOf函数
// // if(1){  //测试
// if (Array.prototype.indexOf === undefined) {
//   //强行给Array的原型对象中添加一个indexOf函数
//   //1.elem 要查找的元素值
//   //2.fromi 从哪个位置开始找
//   Array.prototype.indexOf = function (elem, fromi) {
//       console.log("use my indexOf");

//       //fromi 如果没有提供,则默认从0开始查找
//       fromi === undefined && (fromi = 0);
//       for (let i = fromi; i < this.length; i++) {
//         if (this[i] === elem) {
//             console.log(`index====${i}`);
//             return i;
//         }
//       }

//       console.log(`没有找到`);
//       return -1;
//   }
// }
// console.log(Array);
