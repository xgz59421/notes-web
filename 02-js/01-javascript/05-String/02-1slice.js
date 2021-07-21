/*
 * 字符串截取 
 * string.slice(start, end)
   - start 起点0 
   - end 可选, 不包含end
*/
var txt = "JavaScript";
console.log('原字符串txt:',txt);

var ntxt = txt.slice(0); //相当于原字符串拷贝
console.log('slice(0):',ntxt); 

var ntxt = txt.slice(1);
console.log('slice(1):',ntxt);  

var ntxt = txt.slice(2,4);
console.log('slice(2,4):',ntxt);  
// end < start
var ntxt = txt.slice(4,2);
console.log('slice(4,2):',ntxt);  

var ntxt = txt.slice(-6);
console.log('slice(-6):',ntxt);

console.log('原字符串txt:',txt);  
