// 创建数组
// 1.数组字面量 (推荐)
var emp = ["tom", "king", "jerry", 18, 15, true];

console.log(emp[10]); //undefined
emp[3] = "lucy";
emp[8] = "lily"; //没被赋值 为空 empty
console.log(emp, typeof emp);

var country=[];
country[country.length]='中国';
country[country.length]='瓦坎达';
country[country.length]='日本';
console.log(country);

console.log('---------------------');
// 2.使用内置构造函数
var company = new Array("百度", "腾讯", "阿里");
console.log(company);

var company = new Array(4); //初始化长度为4
console.log(company);
company[0] = "美团";
company[3] = "网易";
company[4] = "京东"; //第5个元素, 所以初始化写不写都可以
console.log(company);

console.log('---------------------');
// 3. 二维数组
var array=[
  ['海淀','朝阳','石景山','西城','东城'],
  ['深圳','广州','珠海','惠州'],
  ['南京','苏州','无锡']
];
console.log(array);
console.log(array[1][2]);

//关联数组,字符串做下标
// var person = [11, 2];
// person["name"] = "tom";
// person.age = 18;
// console.log(person)
// for (var key in person) {
//    console.log(key + ":" + person[key])
// }