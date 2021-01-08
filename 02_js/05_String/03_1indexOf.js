/* 
 * 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 * string.indexOf(searchvalue, start)
   - searchvalue 必须, 规定要搜索的字符串
   - start 可选, 检索位置,省略则从首字符开始检索
   - 返回类型:Number, 如果没有找到匹配的字符串则返回 -1。
*/
var string = "JavaScript";
console.log(string.indexOf("a"))
//从第3位开始查找
console.log(string.indexOf("a",2))
console.log(string.indexOf("ip"))
//没有返回 -1
console.log(string.indexOf("b"))
//最后一次出现的下标
console.log(string.lastIndexOf("a"))