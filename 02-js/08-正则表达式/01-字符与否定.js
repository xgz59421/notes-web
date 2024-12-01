// abc: 匹配字母 "abc"
// [abc]：匹配括号内的任意一个字符
// [^abc]：匹配除了括号内的字符以外的任意一个字符
// [a-zA-Z]: 匹配任意字母字符
// [^a-z]: 匹配除了小写字符以外的字符
// [0-9]: 匹配数字

let string = 'abcdefghijabcedad'
// 1.abc: 匹配字母 "abc"
console.log(/abc/g.test(string))
console.log(string.match(/abc/g))
// [ 'abc', 'abc' ]

// 2.[abc]：匹配括号内的任意一个字符
console.log(string.match(/[abc]/g))
// [
//   'a', 'b', 'c',
//   'a', 'b', 'c',
//   'a'
// ]

// 3.[^abc]：匹配除了括号内的字符以外的任意一个字符
console.log(string.match(/[^abc]/g))
// [
//   'd', 'e', 'f', 'g',
//   'h', 'i', 'j', 'e',
//   'd', 'd'
// ]

// 4.[a-zA-Z]: 匹配任意字母字符
console.log(string.match(/[a-zA-Z]/g))
// [
//   'a', 'b', 'c', 'd', 'e',
//   'f', 'g', 'h', 'i', 'j',
//   'a', 'b', 'c', 'e', 'd',
//   'a', 'd'
// ]

// 5.[^a-z]: 匹配除了小写字符以外的字符
console.log(string.match(/[^a-z]/g))
// null
console.log('fjeio2li3'.match(/[^a-z]/g))
// [ '2', '3' ]

// 6.[0-9]: 匹配数字
console.log(string.match(/[0-9]/g))
// null
console.log('fjeio2li3'.match(/[0-9]/g))
// [ '2', '3' ]
