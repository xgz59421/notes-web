


var array = [1, 2, 3, 4, 5];
// var array = [2, 4, 6, 4, 2];
console.log('判断哪些数组全部由偶数组成');
console.log('------------------------');
console.log('array:', array);

//1.some返回值:一个满足就返回true
// array.some(function(currentValue,index,arr))
var bool_some = array.some(
  function (elem /*, i, arr*/ ) {
    //参数1: 当前对象
    //参数2: 当前位置(基本不用)
    //参数3: 当前数组对象(基本不用)
    return elem % 2 == 0;
  }
);
console.log('bool_some:', bool_some); //true

//2.every返回值:都满足返回true,一个不满足返回false
// array.every(function(currentValue,index,arr))
var bool_every = array.every(
  function (elem, i, arr) {
    //参数1: 当前对象
    //参数2: 当前位置(基本不用)
    //参数3: 当前数组对象(基本不用)
    //返回如果有一个false,则不符合every,终止
    return elem % 2 == 0;
  }
);
console.log('bool_every:', bool_every); 