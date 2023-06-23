/** 检测参数是否为 NaN
 * Number.isNaN(value)
 * @returns boolean
 * 如果是有限数字返回 true，否则返回 false
 * @version ECMAScript6
 */

log(Number.isNaN(123)) // false
log(Number.isNaN(-1.23)) // false
log(Number.isNaN('123')) // false
log(Number.isNaN('NaN')) // false
log(Number.isNaN(0 / 0)) // true
log(Number.isNaN(5 - 2)) // false
log(Number.isNaN(0)) // false
log(Number.isNaN('Hello')) // false
log(Number.isNaN('2005/12/12')) // false
log(Number.isNaN(' ')) // false

function log(params) {
  console.log(params)
}
