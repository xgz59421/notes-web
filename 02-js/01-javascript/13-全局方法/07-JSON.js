// 1.JSON 格式
/* 合法的json
  ["one", "two", "three"]
  { "one": 1, "two": 2, "three": 3 }
  {"names": ["张三", "李四"] }
  [ { "name": "张三"}, {"name": "李四"} ]
 */

 /* 不合法的json
  { "name": "张三", "age": undefined } // 不能使用 undefined
 */

var obj = [ { "name": "张三"}, {"name": "李四"} ];
// 1. JSON.stringify()
console.log('------------JSON.stringify-------------');
var string = JSON.stringify(obj);
console.log('默认输出:',string);
var string =JSON.stringify({ p1: 1, p2: 2 }, null, '\t')
console.log('分行输出:',string);

// 2. JSON.parse()
console.log('------------JSON.parse-------------');
var obj = JSON.parse(string);
console.log(obj);