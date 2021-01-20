var arr=["亮亮","然然","东东"];
//for
// for(var i=0;i<arr.length;i++){
//   console.log(`${arr[i]} 到！`)
// }
//forEach
// arr.forEach(
//   elem=>console.log(`${elem} 到！`)
// );
//强调: js中禁止使用"name"当变量名或属性名
//for of
for(var tname of arr){
  //of依次取出arr中数字下标位置的元素值，反复执行相同操作
  console.log(`${tname} 到!`)
}

function add(          ){
// arguments{          }.length=
//            0 1 2 3...
  var result=0;
  //遍历arguments中每个实参值，并累加到result变量中
  //for：正确
  // for(var i=0;i<arguments.length;i++){
  //   result+=arguments[i];
  // }
  //forEach://报错: arguments.forEach is not a function，因为arguments是类数组对象，无法使用数组家的函数
  // arguments.forEach(elem=>result+=elem);
  //for of
  for(var val of arguments){
    result+=val;
  }
  return result;
}
console.log(add(1,2,3));//6
console.log(add(1,2,3,4,5));//15

Array.prototype.sum=function(){
  var result=0;
  //for
  // for(var i=0;i<this.length;i++){
  //   result+=this[i]
  // }
  //for in: 错误
  // for(var key in this){
  //   result+=this[key]
  // }
  //for of: 正确
  for(var val of this){
    result+=val;
  }
  return result
}
var arr=[1,2,3,4,5];
console.log(arr.sum());//15