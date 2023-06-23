// 强制转为数值型
log('--------强制转为数值型--------')
log(Number('5')) // 5
log(Number('3a')) // NaN
log(Number(true)) // 1

log('--------null和undefined--------')
// null和undefined
log(Number(null)) // 0
log(Number(undefined)) // NaN
var n6 = +'10.133'
log(n6, typeof n6) // 10.133 number

log('--------转整型--------')
// 转整型
log(parseInt(null)) // NaN
log(parseInt(undefined)) // NaN
log(parseInt(-3.14)) // -3
log(parseInt('6.18a')) // 6
log(parseInt('a6.18')) // NaN

// 转浮点型
log('--------转浮点型--------')
log(parseFloat('3.14')) // 3.14
log(parseFloat('6.18a')) // 6.18
log(parseFloat('a6.18')) // NaN
log(parseFloat('5a')) // 5

// 数值和布尔型转字符串
log('--------数值和布尔型转字符串--------')
var num = 2
var str = num.toString()
log(str, typeof str) // 2 string

function log(params) {
  console.log(params)
}
