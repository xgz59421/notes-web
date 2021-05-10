## npm
官方链接: 
 [https://yarnpkg.com/](https://yarnpkg.com/)
```js
`Yarn` 是 Facebook, Google, Exponent， Tilde 开发的一款新的 JavaScript 包管理工具
它的目的是解决这些团队使用 npm 面临的少数问题:
1. 安装的时候无法保证速度/一致性
2. 安全问题，因为 npm 安装时允许运行代码
``` 
----
#### 1. 安装
```js
// npm install -g yarn 
// yarn --version
```
#### 2. 初始化
```js
// yarn init 
// yarn init --yes
```
#### 3. 添加依赖
```js
// 会自动安装最新版本，会覆盖指定版本号
// 1. 添加多个包
// yarn add bootstrap jquery 
// 2. 添加指定版本的包
// yarn add jquery@2.1.4
```
#### 4. 更新
```js
// 1. 将包更新到指定版本
// yarn upgrade jquery@3.0.0
// 2. 将包更新到最新版本
// yarn upgrade --latest jquery
```
#### 5. 删除包
```js
// yarn remove jquery
// yarn remove bootstrap zepto
```
