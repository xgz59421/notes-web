## workspace 管理项目依赖
```js
// wrokspace工作区安装某个插件(也就是所有项目都安装的插件)
yarn add rimraf -D -W(工作区)

// 启动工作区中某一个项目
yarn workspace vue-project1 serve

// 删除所有项目的dist
yarn workspaces run del
```