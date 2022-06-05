### jest
https://jestjs.io/zh-Hans/
```js
Jest  是 Facebook 出品的一个 JavaScript 开源测试框架。
相对其他测试框架，其一大特点就是就是内置了常用的测试工具。
比如零配置、自带断言、测试覆盖率工具等功能，实现了开箱即用
```

##### 解决 vscode 中 jest 代码提示问题
npm i -D @types/jest (必须安装到项目的根目录, 不安装也无所谓, 只是个提示)

##### jest 配置文件
npx jest --init

##### jest cli
npx jest --watchAll
npx jest --watch 需要git支持

##### jest使用 ES6 模块
```
npm i -D babel-jest @babel/core @babel/preset-env
Jest 在运行测试的时候会自动找到 Babel 将 ES6 代码转换为 ES5 执行。
```

##### jest API
```
Test
Expect
describe
生命周期钩子
jest对象
```

##### jest async
```
async 
promise
```

##### 定时器 timer mocks 
在测试环境中，使用可以手动“推进”时间

##### mock function

##### DOM 操作
```js
注意: 
npm install --save-dev jest-environment-jsdom

jest.config.js:
  testEnvironment: "jsdom"
```

##### vue
```js
// 引入完整版vue
import Vue from 'vue/dist/vue'
```

##### snapshot 快照
```
// 第1次运行的时候, 会生成快照文件字符串
// 下一次运行测试的时候会和快照文件进行比对, 如果不一致则测试失败
expect(document.body.innerHTML).toMatchSnapShot()

__snapshots__ 目录中生成快照

更新快照
npx jest --updateSnapshot
```

