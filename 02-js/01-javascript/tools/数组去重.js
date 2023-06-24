var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7]
console.log('原数组', arr);

// 1.Set  
function noRepeat_Set(arr) {
  //利用了Set结构不能接收重复数据的特点
  return [...new Set(arr)]
}
console.log('1. Set', noRepeat_Set(arr))

// 2.filter + indexOf
function noRepeat_filter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log('2. filter', noRepeat_filter(arr))

// 3.for + indexOf  
function noRepeat_filter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
console.log('2. filter', noRepeat_filter(arr))

function noRepeat_for(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log('3. for', noRepeat_for(arr))

// 4.for + for 不推荐  
function noRepeat_DbFor(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
console.log('4. 双重for', noRepeat_for(arr))

// 5.include  
function noRepeat_include(arr) {
  let newArr = [];
  for(i=0; i<arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
  }
 return newArr
}
console.log('5. include', noRepeat_include(arr))