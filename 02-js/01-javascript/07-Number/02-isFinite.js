/** 检测参数是否为无穷大
 * Number.isFinite(value)
 * @returns boolean
 * 如果是有限数字返回 true，否则返回 false
 * @version ECMAScript6
 */

log(Number.isFinite(123)) //true
log(Number.isFinite(-1.23)) //true
log(Number.isFinite(5 - 2)) //true
log(Number.isFinite(0)) //true
log(Number.isFinite('123')) //false
log(Number.isFinite('Hello')) //false
log(Number.isFinite('2005/12/12')) //false
log(Number.isFinite(Infinity)) //false
log(Number.isFinite(-Infinity)) //false
log(Number.isFinite(0 / 0)) //false

function log(params) {
  console.log(params)
}
