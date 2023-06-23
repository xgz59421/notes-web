/** 把对象的值转换为指数计数法
 * number.toExponential(x)
 * @param x 可选, 规定指数计数法中的小数位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将使用尽可能多的数字
 * @returns String
 * 返回 Number Object 的字符串表示，采用指数计数法，即小数点之前有一位数字，小数点之后有 num 位数字。该数字的小数部分将被舍入，必要时用 0 补足，以便它达到指定的长度
 * @version 1.5
 */

console.log((5.56789).toExponential()) // 5.56789e+0
console.log((1234567.1).toExponential()) // 1.2345671e+6
