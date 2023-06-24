// 添加或删除数组中的元素
// array.splice(index, howmany, item1,.....,itemX)
// 参数index:
// 参数howmany: 可选。规定应该删除多少元素。必须是数字
// 可以是 "0",
// 未选, 则删除从index开始到原数组结尾的所有元素
// 参数item1:  可选。要添加到数组的新元素
// 返回: 含有被删除的元素的数组

console.log('----------array.splice()---------------')
var array = [1, 2, 3, 4, 5, 6]
//删除下标后所有数据 array:[1]
// var get = array.splice(1) //[ 2, 3, 4, 5, 6]

//删除下标1后2个数据 array: [ 1, 4, 5, 6 ]
// var get = array.splice(1, 2) //[2, 3]

// 删除倒数-3,-4 array:[1, 2, 3, 6]
// var get = array.splice(-3, 2); //[4, 5]

//替换一个 array:[1, 2, 'java', 4, 5, 6]
// var get = array.splice(2,1,"java"); // [3]

//插入2个 array:[1, 'java', 'python', 2, 3, 4, 5, 6]
var get = array.splice(1, 0, 'java', 'python') //[]

console.log('array:', array)
console.log('get:', get)
