/* 
 * 字符串截取
 * string.substr(start,length) 
   - start 起点0 
   - length 可选, 如果省略, 则到结尾
*/
var txt = "JavaScript";

var ntxt = txt.substr(0);
console.log('substr(0):',ntxt); 

var ntxt = txt.substr(1);
console.log('substr(1):',ntxt);  

var ntxt = txt.substr(2,4);
console.log('substr(2,4):',ntxt); 

var ntxt = txt.substr(-6);
console.log('substr(-6):',ntxt);

console.log('原字符串txt:',txt);  