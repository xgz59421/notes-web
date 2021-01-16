
console.log('----------test1------------');
function parent() {
  var total = 1000;
  return function (money) {
     total -= money;
     console.log(`花了${money},还剩${total}`);
  }
}
var pay = parent();
pay(100);
pay(100);

console.log('----------test2------------');
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
var p1age = p1.getAge();
console.log(p1age);

console.log('----------test3------------');
//定义一个变量,只可以被getValue,setValue两个函数访问 
console.log("匿名函数自调用");
var setValue, getValue;
//匿名函数自调用
(function () {
  var secret = 0;
  setValue = function (value) {
     secret = value;
  }
  getValue = function () {
     return secret;
  }
})();
console.log(getValue());
setValue(50)
secret = 0; //不能影响闭包内数据
console.log(getValue());

console.log('----------test4------------');
var money = function (rate) {
  return function (rmb) {
     return rmb * rate;
  }
}
//人民币转换美元
var rmb2$ = money(0.1639);
console.log(rmb2$(1000));
//人民币转换欧元
var rmb2Euro = money(0.1449);
console.log(rmb2Euro(1000));