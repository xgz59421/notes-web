#### 使用 ES6 模块
npm i -D babel-jest @babel/core @babel/preset-env

Jest 在运行测试的时候会自动找到 Babel 将 ES6 代码转换为 ES5 执行。

Jest 结合 Babel 的运行原理：运行测试之前，结合 Babel，先把你的代码做一次转化，模块被转换为了 CommonJS，运行转换之后的测试用例代码