# vue 应用测试
[![codecov](https://codecov.io/gh/xgz59421/notes-web/branch/main/graph/badge.svg?token=BZ706ITAAG)](https://codecov.io/gh/xgz59421/notes-web)

## vue test utils
```
@/tests/unit
```

## vue TDD
```
@/src/components/TodoApp/__tests__
```

## vue BDD
```
@/tests/feature/TodoApp.spec.js
```

#### Vue Test Utils 常用技巧
```
参考：https://vue-test-utils.vuejs.org/zh/guides/common-tips.html。

mount 深渲染
shallowMount 浅渲染

```

#### 配合 TypeScript 使用
参考：https://vue-test-utils.vuejs.org/zh/guides/#%E9%85%8D%E5%90%88-typescript-%E4%BD%BF%E7%94%A8。

#### 在 Vue 应用中集成 Jest
```
● 方式一：使用 Vue CLI 创建项目的时候。
● 方式二：在一个已有的 Vue CLI 创建的项目中配置 Jest：vue add unit-jest
● 方式三：手动配置。
```

#### test:unit
npm run test:unit
开发时: 
vue-cli-service test:unit -- --watch

#### 代码覆盖率统计
```js
1. 然后安装 Codecov
npm i -g codecov

2. 生成测试覆盖率报告
npm run coverage
进入到 https://app.codecov.io/gh
https://app.codecov.io/gh/xgz59421/notes-web/new
复制 Codecov Token=
96aa8439-fa2b-46ed-a9c2-3ce103552536

3. 运行项目安装的 codecov 上传报告
npx codecov --token=96aa8439-fa2b-46ed-a9c2-3ce103552536
codecov --token=96aa8439-fa2b-46ed-a9c2-3ce103552536
4. 重新查看 Codecov 可以看到报告分析
https://app.codecov.io/analytics/gh/xgz59421 -->Analytics

5. codecov 徽章
https://app.codecov.io/gh/xgz59421/notes-web
Settings --> Badge 
README.md 中可以展示 codecov 徽章
显示测试覆盖率，可以让其他开发者了解应用是否安全可靠
```

#### 自动化测试和持续集成
```
可供选择的持续集成工具有 Gitlab CI、 Travis CI 、 Circle CI、GitHub Actions 等
本项目使用 Github Actions 实现持续集成

配置 Github Actions
项目根目录新建目录和文件 .github/workflows/main.yml：
最后，将所有修改提交到远程仓库的 master 分支上，就可以看到 GitHub Actions 正在自动构建
```

#### 展示 GitHub Actions 徽章
```
GitHub Actions 的徽章这样获取：
https://github.com/<OWNER>/<REPOSITORY>/workflows/<WORKFLOW_NAME>/badge.svg

注意：如果您的工作流程使用 name 关键词，则必须按名称引用工作流程。 如果工作流程名称包含空格，您需要将空格替换为 URL 编码字符串 %20。 有关 name 关键词的更多信息，请参阅“GitHub Actions 的工作流程语法”。

![](https://github.com/lipengzhou/vue-testing-demo/workflows/Publish%20And%20Deploy%20Demo/badge.svg)
```

