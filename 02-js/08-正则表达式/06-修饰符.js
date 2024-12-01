// i: ignore - 不区分大小写
// g: global - 全局匹配
// m: multi line - 多行匹配
// s: 默认情况下的圆点"."是匹配除换行符"\n"之外的任何字符，加上"s"之后, "."中包含换行符 \n

// i 不区分大小写
let str = 'Google runoob taobao runoob'
console.log('i查找第一次匹配项', str.match(/runoob/))
// i查找第一次匹配项 [
//   'runoob',
//   index: 7,
//   input: 'Google runoob taobao runoob',
//   groups: undefined
// ]
console.log('i查找所有匹配项', str.match(/runoob/g))
// i查找所有匹配项 [ 'runoob', 'runoob' ]
//------------------------------------------------------

// g 全局匹配
console.log('g查找第一次匹配项', str.match(/runoob/))
// g查找第一次匹配项 [
//   'runoob',
//   index: 7,
//   input: 'Google runoob taobao runoob',
//   groups: undefined
// ]
console.log('g查找所有匹配项', str.match(/runoob/g))
// g查找所有匹配项 [ 'runoob', 'runoob' ]
//------------------------------------------------------

// m 多行匹配
str = 'runoobgoogle\ntaobao\nrunoobweibo'
console.log('m匹配一个', str.match(/^runoob/g))
// m匹配一个 [ 'runoob' ]
console.log('m多行匹配', str.match(/^runoob/gm))
// m多行匹配 [ 'runoob', 'runoob' ]
//------------------------------------------------------

// s "."中包含换行符 \n
str = 'google\nrunoob\ntaobao'
console.log('没有使用s无法匹配\n', str.match(/runoob./g))
console.log(/runoob./g.test(str))
// 没有使用s无法匹配 null
console.log(`使用s匹配\n`, str.match(/runoob./gs))
// 使用s匹配 [ 'runoob\n' ]
console.log(/runoob./gs.test(str))
// true
//------------------------------------------------------
