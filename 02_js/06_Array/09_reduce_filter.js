
var arrary = [1, 2, 3, 4, 5];
//3.filter
//筛选数组中偶数
var filter = arrary.filter(
    function (elem, i, arr) {
      return elem % 2 == 0;
    }
);
console.log("原数组", arrary);
console.log("filter新数组", filter);//[2,4]

//4.reduce:遍历求和
var sum = arrary.reduce(
    function (total, elem, i, arr) {
      // console.log(total,elem);
      return total + elem;
    }
);

console.log("原数组", arrary);
console.log("reduce:", sum); //15
