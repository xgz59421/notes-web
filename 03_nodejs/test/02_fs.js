//文件系统模块

const fs = require("fs");
//1.查看文件的状态 //没有返回值, 结果在回调函数里
fs.stat("package.json",function (err, result) {
    console.log("----------stat 异步执行------------")
    // console.log(err);
    if(err)throw err;
    // console.log(result)
    //是否为文件
    console.log(result.isFile());
    //是否为文件夹(目录)
    console.log(result.isDirectory())
    console.log("----------stat end------------")
});

console.log("----------statSync 同步执行------------")
var result = fs.statSync("node1_global.js");
// console.log(result)
console.log(result.isFile())

console.log("----------statSync end------------")


//2.创建目录
//异步创建文件夹
fs.mkdir("create_mkdir",function (err) {
    if (err) throw err;
    console.log("目录创建成功")
});
//同步创建文件夹
fs.mkdirSync("create_mkdir2");

//3.移除目录
fs.rmdir("create_mkdir",function (err) {
    if (err) throw err;
    console.log("移除成功")
});
fs.rmdirSync("create_mkdir2");

//4.读取目录
fs.readdir("node_modules",function (err, result) {
    if (err) throw err;
    console.log("异步:node_modules",result)
});
var result = fs.readdirSync("node_modules");
console.log("同步node_modules:",result)

//5.写入文件,记录最后一次内容,有创建功能
fs.writeFile("1.txt","异步tedu.cn",function (err) {
    if (err) throw err;
    console.log("文件写入成功")
});
fs.writeFileSync("1.txt","同步tedu.cn");

//6.追加写入,有创建功能
fs.appendFile("3.txt","异步tedu.cn\n",function (err) {
    if (err) throw err;
    console.log("追加写入成功")
});
fs.appendFileSync("3.txt","同步2tedu.cn\n");

//7.读取文件
fs.readFile("1.txt",function (err,data) {
    if (err) throw err;
    console.log("异步读取:", data.toString());
});
var buf = fs.readFileSync("1.txt");
console.log("同步读取:", buf.toString())

//8.删除文件
fs.unlink("1.txt",function (err) {
    if (err) throw err;
    console.log("异步删除文件成功");
});
fs.unlinkSync("3.txt");

//9.检测文件是否存在,异步的废弃了
console.log("文件是否存在?",fs.existsSync("3.txt"))

//test 目录mydir 中包含有1.txt,2.txt,3.txt,先读取目录中的文件,然后删除所有文件,再删除目录



setTimeout(function () {
    if(fs.existsSync("mydir")){
        if(fs.existsSync("mydir/3.txt")){
            var txt1 = fs.readFileSync("mydir/3.txt");
            console.log(txt1.toString())
            fs.unlinkSync("mydir/3.txt");
        }
        fs.rmdir("mydir",function (err) {
            if (err) throw err;
            console.log("删除mydir 成功")
        });
    }

}, 1000)







