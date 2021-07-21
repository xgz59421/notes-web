

// var arr = ["a", "b", "c", "d"];
// // var str = arr.toString();
// //将数组转字符串
// var str = arr.join("-");
// console.log(str)
// //将字符串转数组
// var arr2 = str.split("-");
// console.log(arr2)


//test 获取用户名和域名
// var email = "tom1234567@163.com"
//方法一:
// var index = email.indexOf("@");
// var user = email.slice(0, index);
// console.log(user)
// console.log(email.slice(index+1))
//方法二
// var email = "tom1234567@163.com"
// var user = email.split("@");
// console.log(user[0], user[1])

//test 获取年月日, 性别
// var id = "210921198709140013";
// var year = id.substr(6,4);
// var month = id.substr(10, 2)
// var day = id.substr(12,2);
// var sex = id.substr(-2,1)
// console.log(year + month +day)
// console.log(sex)

// //截取文件的 后缀名
// var str = "202020192034ad.cmd.452.jpg";
// var index = str.lastIndexOf(".");
// console.log(str.substr(index + 1))
