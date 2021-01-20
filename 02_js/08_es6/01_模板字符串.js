var uname="dingding";
var price=12.5;
var count=5;
var sex=1;
var orderTime=1604654703332;
var week=
  ["日","一","二","三","四","五","六"];
  //0    1    2    3    4    5    6
//getDay():0 1 2 3 4 5 6

console.log(`欢迎 ${uname}`);
console.log(`
  单价:¥${price.toFixed(2)}
  数量:${count}
======================
  小计:¥${(price*count).toFixed(2)}
`);
console.log(`性别: ${sex==1?"男":"女"}`)
//复习第一阶段讲的日期对象
console.log(`下单时间: ${new Date(orderTime).toLocaleString()}`);
var day=new Date().getDay();//数字
console.log(`今天星期${week[day]}`);