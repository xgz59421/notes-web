// 模拟实现 lodash 中的 curry 方法

function getSum (a, b, c) {
  return a + b + c
}

function curry (func) {
  return function curriedFn(...args) {
    
    console.log('---------------------------------');
    console.log('args', ...args);
    console.log('func.length', func.length);
    console.log('arguments', Array.from(arguments));
    console.log(...args.concat(Array.from(arguments)));
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}

const curried = curry(getSum)
// console.log(curried(1, 2, 3))
// console.log(curried(1)(2, 3))
// console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))