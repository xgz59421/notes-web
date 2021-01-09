
var array = [1, 2, 3, 4, 5];
//1.forEach:遍历
array.forEach(
    function (elem, i, arr) {
      console.log(elem);
    }
);
//1 2 3 4 5

//2.map:原数组不变,返回一个新数组
//数组数据*2
var map = array.map(
    function (elem, i, arr) {
      return elem * 2;
    }
);
console.log("原数组", array);
console.log("map新数组", map);//[2,4,6,8,10]
