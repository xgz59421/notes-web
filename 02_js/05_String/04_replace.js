/* 
 *string.replace(searchvalue,newvalue)
  - searchvalue 字符串/正则表达式
  - newvalue  	必需, 替换成的字符串
  - 返回类型: String
*/

var string = `老师:用小红 我的 朋友三个词语造句.小梁说:小红是我的朋友.
        小冉说:朋友! 小红是我的`;
var reg = /小[\u4e00-\u9fa5]/g;
// 正则表达式
var newStr = string.replace(reg, "**");
console.log("replace:", newStr);

// 字符串  意义不大
// var newStr = string.replace('小红', "++++");
// console.log("replace:", newStr);
console.log('---------------------------');
var string = "纪检监察部门简称纪检, 又称为纪委!"
var reg = /纪检监察|纪检|纪委/g;
//replace每次找到敏感词,自动调用回调函数,将敏感词做为形参传入
var str = string.replace(reg, function (keyword) {
    console.log(keyword);

    return keyword.length == 2 ? "**" : "****";
});
console.log(str);

console.log('---------------------------');
var pid = "110102199812262151";
//获取身份证号生日
var birth = pid.slice(6, 14);
console.log(birth);
//将生日格式化
var reg = /(\d{4})(\d{2})(\d{2})/;
birth = birth.replace(reg, "$1年$2月$3日");
console.log(birth);

