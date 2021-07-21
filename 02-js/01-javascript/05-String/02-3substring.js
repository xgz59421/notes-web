/*
 * 字符串截取
 * 不建议使用substring方法，应该优先使用slice或substr
 * string.substring(start, end) 
   - start 必需 (非负的数)
   - end 可选 (非负的数)
*/
var txt = "JavaScript";
console.log('原字符串txt:',txt);  

var ntxt = txt.substring(0);
console.log('substring(0):',ntxt); 

var ntxt = txt.substring(1);
console.log('substring(1):',ntxt);  

var ntxt = txt.substring(2,4);
console.log('substring(2,4):',ntxt); 

console.log('--------------以下substring不好的地方----------------');
// end < start 不是你想要的结果, js 会把4,2调换
var ntxt = txt.substring(4,2);
console.log('substring(4,2):',ntxt); 

// 如果是负数自动转为0
var ntxt = txt.substring(-6);
console.log('substring(-6):',ntxt);

console.log('原字符串txt:',txt);  
