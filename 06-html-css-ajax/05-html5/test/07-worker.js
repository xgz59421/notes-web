var start = new Date().getTime();
do {
  var end = new Date().getTime();
} while (end - start < 3000 );
console.log("3s结束");

// 接受数据
onmessage = function (event) {
  console.log("UI发送过来的数据, ", event.data);
}
// 向UI 发送数据
postMessage("执行成功");

// worker代码中不能 执行任何dom/bom 操作
// var msg = document.getElementById("msg");
// msg.innerHTML = "执行成功";


