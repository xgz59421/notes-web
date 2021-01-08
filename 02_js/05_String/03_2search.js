/* 
 * 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 * 如果没有找到匹配的字符串则返回 -1。
 * string.search(searchvalue)
   - searchvalue 查找的字符串或者正则表达式
*/

// 正则表达式查询
var string = `矮油卧,这个是大傻逼,woCao!`
//修饰符 i - ignore  忽略大小写
var reg = /([我卧]|wo)s*([操草艹槽]|cao)/i;
var index = string.search(reg);
console.log(index);

// 字符串查询
var index = string.search('大');
console.log(index);