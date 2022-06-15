## react testing
https://jestjs.io/docs/tutorial-react
https://testing-library.com/docs/queries/bytestid
#### 创建
```
create-react-app react-testing-demo
```
测试概览
https://react.docschina.org/docs/testing.html

#### 推荐的工具
```js
Jest 是一个 JavaScript 测试运行器

React 测试库
1. React Test Utils: 官网提供的测试工具, 比较麻烦
2. Enzyme: 模拟了jquery 适用于单元测试
3. React Testing Library 适用于集成测试 (推荐)
```

#### Jest 配置说明
```
参考：https://create-react-app.dev/docs/running-tests。

测试文件路径:
● __tests__ 文件夹中带有 .js 后缀的文件。
● 以 .test.js 结尾的文件
● 以 .spec.js 结尾的文件
```

#### React Testing Library 使用
```
断言:
断言匹配器与jest相同
扩展的断言匹配器
参考：https://github.com/testing-library/jest-dom。

触发:
fireEvent(node: HTMLElement, event: Event)
扩展的 user-event
https://github.com/testing-library/user-event
```
