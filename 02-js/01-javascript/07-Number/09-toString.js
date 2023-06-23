/** 把数字转换为字符串
 * number.toString(radix)
 * @param radix 可选。若省略该参数，则使用基数 10
    2 - 数字以二进制值显示
    8 - 数字以八进制值显示
    16 - 数字以十六进制值显示
 * @returns String 把数字转换为字符串
 * @version 1.1
 */

var num = 15
var a = num.toString()
var b = num.toString(2)
var c = num.toString(8)
var d = num.toString(16)

console.log(a) // 15
console.log(b) // 1111
console.log(c) // 17
console.log(d) // f
console.log((-10).toString(2)) // 输出 '-1010'
