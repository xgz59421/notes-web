// Date: JS原生的时间库, 单位: 毫秒ms
// 它以国际标准时间(UTC) 1970年1月1日00:00:00作为时间的零点

// 创建Date对象
console.log('----------创建Date对象----------');
// 1.new Date()  当前时间, T0时区,北京是东8区 -8h
var d1 = new Date();
console.log('1. new Date():\n', d1);
// 2.new Date(datestring)
var d2 = new Date('2021-01-07');
var d2 = new Date('2021/1/7');
console.log('2. new Date("2021-01-07"):\n', d2);
// 3.new Date(1979,5,22)  代表年、月、日、小时、分钟、秒、毫秒
var d3 = new Date(1979,5,22); //月份是0~11的
console.log('3. new Date(1979,5,22):\n', d3);
// 4.new Date(0)
var d4 = new Date(0); //距离计算机元年的毫秒数
console.log('4. new Date(0):\n',d4)
// 5.new Date(时间戳) 
var d5 = new Date(1610014274590); 
console.log('5. new Date(1610014274590):\n',d5)

console.log('----------get----------');
var d = new Date();
console.log(d.getFullYear() + "年" + (d.getMonth()+1) +"月" + d.getDate() + "日" );
console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds());
console.log("星期:" + d.getDay())//0-6 //0是周日
console.log('----------时间戳----------');
console.log(d.getTime())//距离计算机元年的毫秒数

console.log('----------本地日期时间格式----------');
//本地日期时间格式
var d = new Date();
console.log("获取本地当前时间")
console.log("日期时间:" + d.toLocaleString())
console.log("日期:" + d.toLocaleDateString())
console.log("时间:" + d.toLocaleTimeString())

console.log('----------设置日期----------');
//设置日期
var d1 = new Date("2021");
var d2 = d1;
var d3 = new Date(d1);
d1.setFullYear("2039");
console.log("引用类型数据:", d2)
console.log("拷贝对象:", d3)

// //test1:1736984567467 ---->年月日时分秒 星期x
// var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
// var d =  new Date(1736984567467);
// console.log(d.getFullYear() + "年" + (d.getMonth()+1) +"月" + d.getDate() + "日" );
// console.log(arr[d.getDay()])//0-6 //0是周日

// //test2: 计算2031-5-1 18:23:50 距离 2031-10-1 5:45:00相差的天数,小时,分钟,秒钟
// var d1 = new Date(2031, 10, 1, 5, 45,0)
// var d2 = new Date(2031, 5,  1, 18,23,50);
// // var d2 = new Date("2031/5/1 18:23:50"); //月份不一样
// // var d3 = d1.getTime() - d2.getTime(); //=== d1-d2
// var d = d1 - d2;
// d = Math.floor(d/1000);
// var day = Math.floor(d/(60*60*24))
// var hour = Math.floor(d%(60*60*24))//去掉天数 剩余的秒数
// hour = Math.floor(hour/(60*60));
// var minute = Math.floor(d%(60*60))
// minute = Math.floor(minute/60)
// var second = Math.floor(d%60);
// console.log(day,hour,minute,second)

// //test3: 创建对象Date 保存员工入职时间2020/11/28, 3年后合同到期,
// //合同到期前一个月续签合同,如果是周日 ,周五签;打印日期
// var d = new Date("2020/11/28");
// var d_copy = new Date(d);
// d_copy.setFullYear(d_copy.getFullYear() + 3);
// var d_copy2 = new Date(d_copy);
// d_copy2.setMonth(d_copy2.getMonth() - 1);
// console.log(d_copy2.getDay())
// if(d_copy2.getDay() == 6 ){
//     d_copy2.setDate(d_copy2.getDate() - 1);
// }else if(d_copy2.getDay() == 0){
//     d_copy2.setDate(d_copy2.getDate() - 2);
// }

// console.log("入职时间", d.toLocaleDateString());
// console.log("到期时间", d_copy.toLocaleDateString())
// console.log("续签时间", d_copy2.toLocaleDateString())