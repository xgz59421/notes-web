/** 检测参数是否是一个"安全整数"
 * Number.isSafeInteger(value)
 * @returns boolean
 * 如果是有限数字返回 true，否则返回 false
 * @version ECMAScript6
 */

log(Number.isSafeInteger(123)) // true
log(Number.isSafeInteger(-123)) // true
log(Number.isSafeInteger('123')) // false
log(Number.isSafeInteger(5 - 2)) // true
log(Number.isSafeInteger(0)) // true
log(Number.isSafeInteger(0.5)) // false
log(Number.isSafeInteger(0 / 0)) // false

function log(params) {
  console.log(params)
}
