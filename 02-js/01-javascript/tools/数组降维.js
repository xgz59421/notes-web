//  数组扁平化/数组降维
var arr = [1, [2, 3, [4, 5, ['end']]]]
console.log('原数组:', arr)

// 1.reduce
function flutten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flutten(item) : item)
  }, [])
}
var narr1 = flutten(arr)
console.log('flutten:', narr1)
// 2.while
function flutten2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

var narr3 = flutten2(arr)
console.log('while: ', narr3)

function flutten3(arr) {
  arr
    .toString()
    .split(',')
    .map(item => {
      return Number(item)
    })
}

// 3.flat
// es6提供的新方法flat(depth) depth默认为1, 如果已知数组的维度可以使用flat
var narr5 = arr.flat(3)
console.log('flat: ', narr5)

// 4.reg
let result = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')

console.log('reg: ', result)
