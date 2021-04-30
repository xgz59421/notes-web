// 柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)

const _ = require('lodash')

const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

// console.log(haveSpace('hello world'))
// console.log(haveNumber('a1bc123'))

const myfilter = _.curry(function (func, array) {
  return array.filter(func)
})

const findSpace = myfilter(haveSpace)

console.log(myfilter(haveSpace, ['John Connor', 'John_Donne']))

console.log(findSpace(['John Connor', 'John_Donne']))