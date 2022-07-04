
# storybook
#### 安装storybook
```node
介绍几种安装方式: 

1. 选择安装
npx sb init (运行时可能会缺少vue依赖, npm i vue安装一下搞定)

2. 指定类型安装
npx sb init --type vue
npx sb init --type vue3

3. 已有项目安装
npx storybook init

4. 空项目安装
npx -p @storybook/cli sb init --type vue
yarn add vue
yarn add vue-loader vue-template-compiler --dev

- 启动与打包
"scripts": {
  "storybook": "start-storybook -p 6006",
  "build-storybook": "build-storybook"
}
```

#### workspaces
```js
修改项目结构为 monorepo
package.json:
{
  "private": true, // 提交github 或者 发布到npm时 禁止把当前根目录内容进行提交
  "workspaces": [
    "packages/*"
  ],
}
// wrokspace工作区安装某个插件(也就是所有项目都安装的插件)
yarn add rimraf -D -W(工作区)
// 启动工作区中某一个项目
yarn workspace vue-project1 serve
// 删除所有项目的dist
yarn workspaces run del
```

#### lerna
```js
lerna是GitHub上面开源的一款js代码库管理软件
lerna用于管理多个包的javaScript项目
lerna可以一键把代码提交到git和npm仓库

登录npm:
npm login
安装: 
yarn global add lerna
初始化:
lerna init
发布:
lerna publish
// 发布时候注意包名 不可以与npm上的包名重复
```

#### 本项目流程
```
1. 创建storybook, 选择vue
  npx sb init
2. 创建后可能会缺少vue包
  npm i vue
3. 手动改成 workspaces
4. 登录npm
  npm login
  需要切换镜像到 npm config set registry https://registry.npm.taobao.org
5. lerna
  安装 npm i lerna -g
  lerna init
  lerna publish
6. 查看发包
  https://www.npmjs.com/settings/xgz59421/packages
7. 切回镜像
  npm config set registry https://registry.npmjs.org

```

#### 发包打印
```
// 执行 lerna publish
PS C:\Users\zh\works\vue\vue-storybook> lerna publish
? Select a new version (currently 0.0.0) (Use arrow keys)
> Patch (0.0.1)
  Minor (0.1.0)

// 第一次发包打印
PS C:\Users\zh\works\vue\vue-storybook> lerna publish
lerna notice Current HEAD is already released, skipping change detection.
lerna success No changed packages to publish

// 此时没有的发包成功
// git commit后, 再次执行 lerna publish
```