### jest
https://jestjs.io/zh-Hans/
```js
Jest  是 Facebook 出品的一个 JavaScript 开源测试框架。
相对其他测试框架，其一大特点就是就是内置了常用的测试工具。
比如零配置、自带断言、测试覆盖率工具等功能，实现了开箱即用
```

#### 解决 vscode 中 jest 代码提示问题
npm i -D @types/jest (必须安装到项目的根目录, 不安装也无所谓, 只是个提示)

#### jest 配置文件
npx jest --init

#### jest cli
npx jest --watchAll
npx jest --watch 需要git支持