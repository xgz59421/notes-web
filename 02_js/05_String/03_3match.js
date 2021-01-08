
/* 
 * string.match(regexp)
   - regexp 正则表达式
   - 返回类型Array:  
      查找一个 无/g: [0:"敏感词", index"位置]
      查找多个 有/g: [敏感词1, 敏感词2...]
   - 返回null: 没找到
*/

var str=`Range家住北京市八宝山，
      range发明煎饼机，RANGE平时喜欢养兔子，range喜欢单杠运动`;
//修饰符 i - ignore  忽略大小写
// console.log( str.search(/range/i) );
console.log( str.match(/RANGE/i) );
//g - global  全局查找
console.log( str.match(/RANGE/ig) );
// console.log( str.replace(/range/gi,'xxx') );
