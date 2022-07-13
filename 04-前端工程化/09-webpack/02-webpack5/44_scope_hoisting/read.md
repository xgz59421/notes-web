```js
将不同文件代码打包到一个 作用域下
为了查看源码方便, 
  将webpack.prod.js,  mode: 'development'

"use strict";
__webpack_require__.r(__webpack_exports__);

function foo1(num1, num2) {
  return num1 + num2;
}
function foo2(a, b) {
  return a * b;
}
var lodash = __webpack_require__("./node_modules/lodash/lodash.js");

console.log(foo1(10, 20));
console.log(foo2(1, 10));


```