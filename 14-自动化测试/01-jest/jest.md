# jest
https://jestjs.io/zh-Hans/
```js
jest是facebook出品的一个 javascript 开源测试框架。
相对其他测试框架，其一大特点就是就是内置了常用的测试工具。
jest 适用但不局限于使用以下技术的项目：Babel,、TypeScript、 Node、 React、Angular、Vue 等

Jest 主要特点：
● 零配置
● 自带断言
● 快照测试
● Jest 的测试用例是并行执行的，而且只执行发生改变的文件所对应的测试，提升了测试速度。
● 测试覆盖率
● Mock 模拟
```

##### 安装
npm install --save-dev jest

##### 解决 vscode 中 jest 代码提示问题
npm i -D @types/jest (必须安装到项目的根目录, 不安装也无所谓, 只是个提示)

##### jest 配置文件
npx jest --init

##### jest cli
npx jest --watchAll
npx jest --watch 需要git支持

##### 使用 ES6 模块
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

##### jest 测试覆盖率
```js
测试覆盖率(test coverage)是衡量软件测试完整性的一个重要指标。
掌握测试覆盖率数据，有利于客观认识软件质量，正确了解测试状态，有效改进测试工作
Jest 测试覆盖率相关配置: 
指标 	                        说明 
%stmts（statement coverage）  语句覆盖率：是不是每个语句都执行了？
%Branch（branch coverage）    分支覆盖率：是不是每个if代码块都执行了？
%Funcs（function coverage）   函数覆盖率：是不是每个函数都调用了？
%Lines（line coverage）       行覆盖率：是不是每一行都执行了？

package.json:
// 建议配置package.json
"script": {
  "coverage": "vue-cli-service test:unit --coverage"
}
// jest.config.js (--watch 时候 会时时监控测试覆盖率, 影响效率, 不建议开发时候配置)
module.exports = {
   ...
  // 收集测试覆盖率 
  collectCoverage: true,
  
  // 一组glob模式，指示一组应为其收集覆盖率信息的文件。如果文件与指定的 glob 模式匹配，则即使该文件不存在测试，也将为其收集覆盖率信息，并且在测试套件中从不需要它。
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  
  // 测试覆盖率报告输出目录
  coverageDirectory: 'coverage',
  
  // 指示应使用哪个提供程序来检测覆盖范围的代码。允许的值为 babel（默认）或 v8。
  // 请注意，使用 v8 被认为是实验性的。这使用了 V8 的内置代码覆盖率，而不是基于 Babel 的代码覆盖率。它没有经过很好的测试，并且在 Node 的最后几个版本中也得到了改进。使用最新版本的 Node（在撰写本文时为v14）会产生更好的结果。
  coverageProvider: 'babel',
  
  // Jest 在编写覆盖率报告时使用的报告人姓名列表。可以使用任何伊斯坦布尔记者
  coverageReporters: ["json", "lcov", "text", "clover"],

  // 覆盖率阈值，如果没有达到阈值则测试失败
  coverageThreshold: {
		"global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    },
    "./src/components/": {
      "branches": 40,
      "statements": 40
    },
    "./src/reducers/**/*.js": {
      "statements": 90
    },
    "./src/api/very-important-module.js": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  
  // 通常，在收集代码覆盖率时会忽略测试文件。使用此选项，您可以覆盖此行为，并在代码覆盖率中包含否则被忽略的文件。
  forceCoverageMatch: ["**/*.t.js"]
}

```
##### 上传覆盖率
```
通常情况下不建议将测试覆盖率报告保存在项目仓库中
# .gitignore
coverage

们可以使用更专业的工具来帮助我们展示覆盖率报告。有两个网站可供选择：Codecov 和 Coveralls
比如 https://app.codecov.io/gh/vuejs/vue

首先，打开 Codecov 官网，绑定 Github 账号之后，选择要展示测试覆盖率的仓库并获得 token。
然后，安装 Codecov：
  npm install --save-dev codecov
生成测试覆盖率报告：
  npm run coverage
将测试覆盖率报告上传到 codecov：
  codecov --token=xxx

还可以 展示 codecov 徽章
settings-> badge  复制链接到 README.md中即可
```

##### 调试测试代码
参考：https://jestjs.io/docs/troubleshooting。

##### 其它工具
```
vscode-jest
jest-extended
eslint-plugin-jest
awesome-jest
https://github.com/Raathigesh/majestic：一个零配置的 Jest GUI 面板
```
