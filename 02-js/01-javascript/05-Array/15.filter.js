// 得到筛选后的新数组
// 不会改变原始数组

var arrary = [1, 2, 3, 4, 5]
//筛选数组中偶数
var rst = arrary.filter((elem, i, arr) => elem % 2 == 0)
console.log('原数组', arrary)
console.log('filter新数组', rst) //[2,4]
