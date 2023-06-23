/**
 * array.reduce(function(total, curVal, curIndex, arr), initVal)
 * @param total 必需。初始值, 或者计算结束后的返回值
 * @param initVal 可选。传递给函数的初始值
 */
// reduceRight 执行顺序与reduce相反

var arrary = [1, 2, 3, 4, 5];
// 遍历求和
var sum = arrary.reduce((total, curVal, i, arr) => {
    console.log('总数:',total, '当前值:',curVal)
    return total + curVal
  },
  // 5
)

console.log("原数组", arrary)
console.log("reduce:", sum)