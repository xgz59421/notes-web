var moment = require('./moment.min');

// moment是 javascript 日期处理类库
// npm install --save moment

// 构建当前日期moment对象
var moment1 = moment();
var moment2 = moment(undefined);
var moment3 = moment([]);
var moment4 = moment({});
console.log(moment1);
console.log(moment2);
console.log(moment3);
console.log(moment4);

// moment(string)
// var moment5 = moment("2020-5-16");
// console.log(moment5);

// moment.unix(number) 时间戳
var moment6 = moment.unix(1587600000);
console.log(moment6);
var date = `${moment6.year()}-${moment6.month()+1}-${moment6.date()}`
console.log(date);
var moment7 = moment.unix(1587600000)
  .format("Y年MM月DD日HH:mm");
console.log(moment7);
console.log(moment().locale());
console.log(moment().format('L'));