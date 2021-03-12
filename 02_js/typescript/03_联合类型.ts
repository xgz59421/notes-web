var val:string|number 
val = 12 
console.log("val:", typeof val, val) 
val = "Runoob" 
console.log("val:", typeof val, val)
// val = true  //报错

console.log('-----------------------------');
function disp(name:string|string[]) { 
  if(typeof name == "string") { 
    console.log(name) 
  } else { 
    for( var i = 0;i<name.length;i++) { 
      console.log(name[i])
    } 
  } 
} 
disp("Runoob") 
console.log("输出数组....") 
disp(["Runoob","Google","Taobao","Facebook"])

console.log('-----------------------------');
var array:number[]|string[]; 
var i:number; 
array = [1,2,4] 
console.log("**数字数组**")  
 
for(i = 0;i<array.length;i++) { 
   console.log(array[i]) 
}  
 
array = ["Runoob","Google","Taobao"] 
console.log("**字符串数组**")  
 
for(i = 0;i<array.length;i++) { 
   console.log(array[i]) 
}