/* 
console.log(1);       //1
console.info(2);      //2
console.warn(3);      //3
console.error(4);     //4
 */

// 1.console.time
//开始计时
console.time('test')
for (let i = 1; i <= 100000; i++) {}
//结束计时
console.timeEnd('test')
console.log('-----------------------')

// 2.console.table
var languages = [
  { name: 'JavaScript', fileExtension: '.js' },
  { name: 'TypeScript', fileExtension: '.ts' },
  { name: 'CoffeeScript', fileExtension: '.coffee' }
]
console.table(languages)
console.log('-----------------------')
// 3.console.dir
// console.dir(languages)
// console.log('-----------------------');

// 4.console.count
function greet(user) {
  console.count()
  console.log('hi ' + user)
}
greet('lucy')
greet('lily')
greet('bob')
console.log('-----------------------')

// 5.console.assert 相当于try catch
console.assert(false, '判断条件不成立')
