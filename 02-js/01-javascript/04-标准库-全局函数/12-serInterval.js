
// 启动定时器, setTimeout
var timer = setTimeout(function () {
  console.log('clearTimeout');
  // 清除定时器
  clearTimeout(timer);
  clearTimeout(timer2);
}, 5000);

var number = 1;
// 启动定时器, setInterval
var timer2 = setInterval(() => {
  console.log('setInterval', number++);
}, 1000);

