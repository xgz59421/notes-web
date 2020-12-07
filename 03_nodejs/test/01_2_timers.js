//全局对象 Timers定时器

// //1.一次性定时器
// let timer = setTimeout(function () {
//     console.log("bomb")
// }, 3000);
// //清除
// clearTimeout(timer);

// //2.周期性定时器
// let timer = setInterval(function () {
//     console.log("滴滴滴")
// }, 2000);
// clearInterval(timer);

//3.立即执行的定时器
console.log(2)
let timer = setImmediate(function () {
    console.log(1)
});
// clearImmediate(timer);
//另一个立即执行定时器
process.nextTick(function () {
    console.log(4)
});
console.log(3)
//2341 2,3属于主程序, 1放到事件队列中, 主程序执行完,然后执行事件队列
//4放到 主程序的后面


// //test: 打印3次hello
// var count = 0;
// var timer = setInterval(function () {
//     console.log("hello");
//     count++;
//     if(count == 3){
//         clearTimeout(timer);
//     }
// },1000);