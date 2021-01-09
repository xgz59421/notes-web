
// 1.判断一个对象是否为数组
// Array.isArray(obj)
// 返回: bool

var obj ={'name': 'lucy'}
console.log(Array.isArray(obj));

var array = [1,2,3,4,5];
console.log(Array.isArray(array));

// 2.把数组转换为字符串
// array.toString()
// String 数组的所有值用逗号隔开

var string = array.toString()
console.log(string, typeof string);
