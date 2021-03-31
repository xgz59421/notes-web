onmessage = function(event){
  
  // 返回数字的累加和
  var sum = 0;
  var number = parseInt(event.data);
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  postMessage(sum);
}
