var infos = [
  { id: '1', title: 'titl1', body: '91' },
  { id: '2', title: 'titl2', body: '92' },
  { id: '3', title: 'titl3', body: '93' },
  { id: '4', title: 'titl4', body: '94' }
]

// return {1:{}, 2:{}}
const arrayToHash = arr => {
  return arr.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})
}
let hash = arrayToHash(infos)
console.log('hash', hash)

const hashToArray = hash => {
  return Object.keys(hash).map(key => hash[key])
}
let array = hashToArray(hash)
console.log('array', array)

let id = '1'
console.log(`查找id为 "${id}" 的数据:`)

console.log('hash', hash[id])
console.log(
  'array',
  infos.find(item => item.id == id)
)
