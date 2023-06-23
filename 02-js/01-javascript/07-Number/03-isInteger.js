/** 检测参数是否为整数
 * Number.isInteger(value)
 * @returns boolean
 * 如果是有限数字返回 true，否则返回 false
 * @version ECMAScript6
 */

log(Number.isInteger(-123)) // true
log(Number.isInteger(123)) // true
log(Number.isInteger('123')) // false
log(Number.isInteger(4 - 2)) // true
log(Number.isInteger(4 / 2)) // true
log(Number.isInteger(5 - 2)) // true
log(Number.isInteger(5 / 2)) // false

function log(params) {
  console.log(params)
}
