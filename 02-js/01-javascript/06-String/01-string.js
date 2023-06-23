//转义字符
console.log('a\nb')
console.log('C:\\Users\\web')
console.log('We are the so-called \"Vikings" from the north.')

// string 创建
// var txt = new String('1234');
// console.log(txt, typeof txt);
var abc = 'Abc'
console.log('string:', abc)

// 实例属性 String.prototype.length
console.log('abc.length: ', abc.length)

// 实例方法 API所有操作, 原字符串不发生改变
// 1.charAt()返回指定位置的字符
console.log('abc.charAt(1):', abc.charAt(1))
console.log('abc.[1]:', abc[1])

// 2.charCodeAt()/fromCharCode() 返回字符串指定位置的 Unicode 码
console.log('abc.charCodeAt(1):', abc.charCodeAt(1))
console.log('String.fromCharCode(97):', String.fromCharCode(97))

// 3.toLowerCase()/toUpperCase()
console.log('abc.toLowerCase():', abc.toLowerCase())
console.log('abc.toUpperCase():', abc.toUpperCase())