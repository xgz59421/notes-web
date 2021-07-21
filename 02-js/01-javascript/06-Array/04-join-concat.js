
var names1 = [1, 2, 3];
var names2 = [4];
var names3 = [5, 6];

console.log('---------join---------');
// 1.把数组中的所有元素转换为一个字符串
// array.join(separator)
// separator: 可选, 指定的分隔符
// 返回: String
console.log(names1.join("-"));
console.log(names1.join(""));
console.log(names1.join(" and "));

console.log('---------concat---------');
// 2.连接两个或多个数组, 不会改变原数组
// array1.concat(array2,array3,...,arrayX)
// 返回： Array 
var names = names1.concat(names2,names3)
console.log('names1:', names1);
console.log('names:', names);
