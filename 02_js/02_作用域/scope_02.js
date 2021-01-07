
function fun() {console.log(1);}
fun();

function fun() {console.log(2);}
fun();


var fun1 = function () {console.log(10);}
fun1();

var fun1 = function () {console.log(20);}
fun1();



//声明提前 最后 第二个fun 会覆盖第一个 fun  然后输出 fun() fun()

/*
  翻译为:
  -----------------------
  var fun1
  function fun() {console.log(1);}
  function fun() {console.log(2);}
  fun();------------->2
  fun();------------->2
  fun1 = function () {console.log(10);}
  fun1();------------->10
  fun1 = function () {console.log(20);}
  fun1();------------->20
*/