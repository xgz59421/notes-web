// 返回对创建此对象的 Number 函数的引用
log(Number.constructor) // [Function: Function]
// 可表示的最大的数
log(Number.MAX_VALUE) // 1.7976931348623157e+308
// 可表示的最小的数
log(Number.MIN_VALUE) // 5e-324
// 负无穷大，溢出时返回该值
log(Number.NEGATIVE_INFINITY) // -Infinity
// 正无穷大，溢出时返回该值
log(Number.POSITIVE_INFINITY) // Infinity
// 非数字值
log(Number.NaN) // NaN
// 允许您可以向对象添加属性和方法
log(Number.prototype) // {}

function log(params) {
  console.log(params)
}
