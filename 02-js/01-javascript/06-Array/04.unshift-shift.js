
var array = [];

// 1.向数组的开头添加一个或更多元素
// array.unshift(item1,item2, ..., itemX)
// 返回: 新的长度
console.log('array:', array)
console.log('-----unshift-----');
array.unshift(10);
console.log('unshift(10):', array);
array.unshift(11,12);
console.log('unshift(11,12):', array);

// 2.把数组的第一个元素从其中删除
// array.shift()
// 返回:第一个元素的值
console.log('-----shift-----');
var shift = array.shift();
console.log('shift():', array);
console.log('shift:', shift);