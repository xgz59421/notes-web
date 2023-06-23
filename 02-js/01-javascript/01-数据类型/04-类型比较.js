log(3 == '3') // true
log(3 === '3') // false
log(1 == true) // true
log(1 === true) // false
log(2 != '3') // true 只是比较值
log('2' !== '3') // true 先比较类型，再比较值

log('--------------------------')
log(3 > '10') // false
// 比较的Unicode码
log('3' > '10') // true
log('3'.charCodeAt(), '1'.charCodeAt()) // 51 49

log('--------------------------')
// '10a' NaN
log(3 > '10a') // false
log(3 < '10a') // false
log(3 == '10a') // false
log(NaN == NaN) // false

function log(params) {
  console.log(params)
}
