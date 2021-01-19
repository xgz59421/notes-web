
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


// test
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  // [ 'tom@example.com', 'peter@example.com' ]
  return user.email;
})
.filter(function (email) {
  // [ 'tom@example.com']
  return /^t/.test(email);
})
.forEach(function (email) {
  // 'tom@example.com'
  console.log(email);
});

