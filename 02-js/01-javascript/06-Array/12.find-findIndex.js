/**
 * 返回符合测试条件（函数内判断）的第一个数组元素值，没有则返回 undefined
 * @method array.find(function(currentValue, index, arr))
 */
var infos = [
  { id: '1', title: 'titl1', body: '91' },
  { id: '2', title: 'titl2', body: '92' },
  { id: '3', title: 'titl3', body: '93' },
  { id: '4', title: 'titl4', body: '94' }
]
let rst = infos.find((info) => info.id == '4')
console.log('rst:', rst)

/**
 * 返回符合测试条件（函数内判断）的第一个数组元素索引，没有则返回 -1
 * @method array.find(function(currentValue, index, arr))
 */
let index = infos.findIndex((info)=>info.id == '4')
console.log('index:', index)