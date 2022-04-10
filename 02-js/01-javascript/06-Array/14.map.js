
var array = [1, 2, 3, 4, 5];

// 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
// 不会改变原始数组

// 数组数据*2
var rst = array.map(
    function (elem, i, arr) {
      return elem * 2;
    }
)
console.log("原数组", array)
console.log("map后新数组", rst)
