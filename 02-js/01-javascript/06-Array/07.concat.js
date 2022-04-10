
var names1 = [1, 2, 3];
var names2 = [4];
var names3 = [5, 6];

console.log('---------concat---------');
// 2.连接两个或多个数组, 不会改变原数组
// array1.concat(array2,array3,...,arrayX)
// 返回： Array 
var names = names1.concat(names2,names3)
console.log('names1:', names1);
console.log('names:', names);
