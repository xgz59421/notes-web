//1.语法错误,一行代码也不会执行 //SyntaxError: Unexpected token :
// var a = 1:

//2.引用错误 //ReferenceError:tom is not defined
// var str = tom;

//3.类型错误 TypeError: arr.slicer is not a function
// var arr = ["a", "b", "c"];
// console.log(arr.slicer)

//4.范围错误: RangeError: Invalid array length
// var arr2 = new Array(-1);

//5.自定义错误
// throw "自定义错误";

console.log("错误处理----------------")
try{
    var age = 101;
    if (age > 100 || age < 0){
        throw  "年龄超出了范围";
    }
}
catch (err) {
    console.log(err)
    age = 100;
}
console.log(age)
