// 丢失的参数,值被设置为：undefined
function func(parameter1, parameter2, parameter3) {
  //   要执行的代码
}

// arguments 对象包含函数调用时使用的参数数组
function findMax() {
  var max = -Infinity
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}
let max = findMax(4, 5, 6)
console.log('max=', max)

// 定义三个函数，分别表示三种付款方式:
// 1.什么实参值都不给时，采用手机支付
// 2.只提供一个钱数作为实参值，采用现金支付
// 3.提供两个实参值(卡号和密码)，采用银行卡支付
function pay() {
  if (arguments.length == 0) {
    console.log(`手机支付...`)
  } else if (arguments.length == 1) {
    //否则如果提供了一个实参值，就现金支付
    console.log(`现金支付...收您${arguments[0]}元`)
  } else {
    // arguments.length == 2
    console.log(`刷卡支付...从您卡号${arguments[0]}扣款成功`)
  }
}

pay()
pay(100)
pay('6553 1234', '123456')
