//Math对象
console.log("圆周率:" + Math.PI);
console.log("绝对值:" + Math.abs(14-65));//absolute
console.log("向上取整:" + Math.ceil(3.14));
console.log("向下取整:" + Math.floor(3.14));
console.log("四舍五入取整:" + Math.round(3.49));
console.log("取最大值:" + Math.max(29,4,89,1));
console.log("取最小值:" + Math.min(29,4,89,1));
console.log('数组中最大数',Math.max(...[22,13,6,55,'30'])); // 55
console.log("x的y次方:" + Math.pow(5,2));//25
console.log("[0--1)随机数:" + Math.random());//[0--1)
console.log("0-9随机数:" + Math.floor(Math.random()*10));//

//获取4个验证码
var arr = ["a","b","c","d","e","f","g","h","i","j"];
var newArr = [];
for (var i = 0; i < 4; i++) {
	var num = Math.floor(Math.random()*arr.length);
	newArr.push(arr[num])
}
console.log("随机:" +JSON.stringify(newArr))

//hOw aRe yOU--->How Are You
var str = "hOw aRe yOU";
var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
	var first = arr[i].substr(0,1).toUpperCase();
	var other = arr[i].substr(1).toLowerCase();
	arr[i] = (first+other)
}
console.log(arr.join(" "))