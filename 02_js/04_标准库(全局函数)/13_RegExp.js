//*正则表达式
/*
语法:
  var regex = new RegExp('xyz', 'i');
    等价于 ↓
  var regex = /xyz/i;
修饰符:
  i - 修饰符是用来执行不区分大小写的匹配。
  g - 修饰符是用于执行全文的搜索
实例方法:
  RegExp.prototype.test()  方法返回一个布尔值,表示当前模式是否能匹配参数字符串
  RegExp.prototype.exec()  用来返回匹配结果。
    如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null
支持正则表达式的 String 对象的方法
  search	检索与正则表达式相匹配的值。	1	4
  match	找到一个或多个正则表达式的匹配。	1	4
  replace	替换与正则表达式匹配的子串。	1	4
  split 把字符串分割为字符串数组。
*/
// 详情: https://www.runoob.com/jsref/jsref-obj-regexp.html

// exec
var str = "公安局公安人员负责维护公共安全秩序";
var reg = /公安|公共安全/g;
do {
  var arr = reg.exec(str);
  if (arr != null) {
    console.log('---------------------');
    console.log(arr);
    console.log("在" + arr.index + "位置,发现敏感词" + arr[0]);
  }
} while (arr != null);

// test
// 1.匹配手机号
var reg = /(\+86|0086)?\s*1[3-9]\d{9}/;
console.log('匹配手机号:',reg.test('1370402111'));

// 2.匹配身份证号: 
var reg = /\d{15}(\d{2}[0-9x])?/
console.log('匹配身份证号:',reg.test('123456789123456789'));

// 3.匹配中文姓名
var reg = /[\u4e00-\u9fa5]{2,}/
console.log('匹配中文姓名:',reg.test('在在'));

// 4.匹配邮箱
var reg = /\w+@\w+\.\w+/
console.log('匹配邮箱:',reg.test('kokp@13.c'));

// 5.密码强度: 8位以上,字母数字,至少包含一位大写字母和一位数字
var reg = /^(?![a-z0-9]+$)(?![A-Za-z]+$)[A-Za-z0-9]{8,}/
console.log('密码强度:',reg.test('zhangHao1'));