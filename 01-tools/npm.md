## npm
官方链接: 
 [https://docs.npmjs.com/cli/v6](https://docs.npmjs.com/cli/v6)
  ```js
  npm是用来管理包的工具，包含下载安装、更新、卸载、上传...  
  npm在安装nodejs的时候会附带的安装 
  ``` 
- [1. 登录npm](#1)
- [2. 查看npm版本](#2)
- [3. npm帮助](#3)
- [4. 切换仓库镜像](#4)
- [5. 创建package.json](#5)
- [6. 安装/卸载包](#6)
- [7. 发布npm](#7)

--------
><h2 id='1'>1. 登录</h2>
```js
// npm login
username: xgz59421
password: 同github
email: 87256657@qq.com
// npm whoami 查看登录
```

><h2 id='2'>2. 查看版本</h2>
```js
// npm -v
// npm config list 查看配置
```

><h2 id='3'>3. 帮助</h2>
```js
`查看帮助信息`
// npm -help (aliase -h)  

`查看安装相关的命令帮助`
// npm install -h  
```

><h2 id='4'>4. 切换仓库镜像</h2>
```js
`查看当前下载仓库地址`
// npm config get registry 

`切换到淘宝镜像地址`
// npm config set registry https://registry.npm.taobao.org 

`切换回原地址`
// npm config set registry http://registry.npmjs.org 
```

><h2 id='5'>5. 创建package.json</h2>
```js
// npm init -y
```
><h2 id='6'>6. 安装/卸载包</h2>
```js
`卸载包`
// npm uninstall 

`根据package.json文件安装依赖`
// npm install 

`将包安装到全局目录中`(npm config list查看)
// npm install -g 
`安装开发依赖`(devDependencies)
// npm install --dev
`安装版本`
// pm i swiper@^5  安装版本5的swiper
```

><h2 id='7'>7. 发布npm</h2>
```js
`上传前要切换回原地址`
// npm config set registry http://registry.npmjs.org 

`上传npm`
// npm publish  
```


