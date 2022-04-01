// 排序, 改变原始数组
// array.sort(sortfunction)
// sortfunction 可选。规定排序顺序。必须是函数。

var array = [23,9,78,6,45];

console.log('---------sort---------');
array.sort(function (a, b) {
    return a - b; //小到大
    // return b - a; //大到小
});
console.log(array);

var names = [
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28 }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
console.log(names);

