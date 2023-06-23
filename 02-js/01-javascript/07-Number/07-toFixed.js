/** 把数字转换为字符串，结果的小数点后有指定位数的数字
 * Number.toFixed(value)
 * @param x 规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。
 * @returns String, 小数点后有固定的 x 位数字
 * @version 1.5
 */

console.log((5.56789).toFixed(2)) // 5.57
