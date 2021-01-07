
//变量提升,JS程序执行前，会将var声明的变量提升到所在作用域的最前边，只是提升声明，赋值不提升。

console.log(a);
var a = 1;//变量提升

var c = 5;
function fun(){
	console.log('1',c);//变量提升 
	var c = 15;
}
fun();

/*
  翻译为:
  -----------------------
  function fun(){
    var c;
    console.log(c);
    c = 15;
  }
  var a;
  console.log(a);
  a=1;
  fun();
*/
