
var array = [];
// 1.方法可向数组的末尾添加一个或多个元素
// array.push(item1, item2, ..., itemX)
// 返回: 新的长度。
console.log('array:', array);
console.log('-----push-----');
array.push(1);
console.log('array:', array);
array.push(2,3);
console.log('array:', array);

// 2.删除数组的最后一个元素
// array.pop()
// 返回: 删除的元素
console.log('-----pop-----');
var pop = array.pop();
console.log('array:', array);
console.log('pop:', pop);

// 3.向数组的开头添加一个或更多元素
// array.unshift(item1,item2, ..., itemX)
// 返回: 新的长度
console.log('-----unshift-----');
array.unshift(10);
console.log('array:', array);
array.unshift(11,12);
console.log('array:', array);

// 4.把数组的第一个元素从其中删除
// array.shift()
// 返回:第一个元素的值
console.log('-----shift-----');
var shift = array.shift();
console.log('array:', array);
console.log('shift:', shift);