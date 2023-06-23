
var array = [];
// 1.方法可向数组的末尾添加一个或多个元素
// array.push(item1, item2, ..., itemX)
// 返回: 新的长度。
console.log('array:', array);
console.log('-----push-----');
array.push(1);
console.log('push(1):', array);
array.push(2,3);
console.log('push(2,3):', array);

// 2.删除数组的最后一个元素
// array.pop()
// 返回: 删除的元素
console.log('-----pop-----');
var pop = array.pop();
console.log('pop():', array);
console.log('得到的pop:', pop);
