//文件流
// 如果文件过大 读取到内存的文件 一点一点流出

const fs = require("fs");
// console.log(fs)

//1.创建一个读取的流
let readStream = fs.createReadStream("test.txt"); //所有数据都可以读取 如.zip mp3 mp4等等

var count = 0;//一共读取了多少段
//读取data
readStream.on("data",function (chunk) {
    //chunk 获取的一段一段的数据 buffer数据
    // console.log(chunk.toString()) //不是文本不需要打印了
    count++;
});
//读取结束的事件
readStream.on("end",function () {
    console.log("读取的段数:",count);
});

//2.创建一个写入的流
let writeStream = fs.createWriteStream("testcopy1.txt");
//把读取的流通过一个 管道 添加到写入的流
readStream.pipe(writeStream);

//3.拷贝文件 没有流 性能快
//fs.copyFile(); //略
fs.copyFileSync("test.txt","testcopy2.txt");

