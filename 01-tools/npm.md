## npm
官方链接: 
 [https://docs.npmjs.com/cli/v6](https://docs.npmjs.com/cli/v6)
 npm是用来管理包的工具，包含下载安装、更新、卸载、上传...  
  npm在安装nodejs的时候会附带的安装 

#### 1. 登录
```js
1. 登录npm
  npm login
    username: xgz59421
    password: 同github
    email: 87256657@qq.com
2. 查看登录
  npm whoami 
```

#### 2. 查看
```js
1. 查看版本
  npm -v

2. 查看配置
  npm config list

3. 查看全局安装包
  npm list -g

4. 查看本地项目安装包
  npm list

5. 查看某个模块的版本号
  npm list webpack

6. 查看帮助信息
  npm -help (aliase -h) 

7. 查看安装相关的命令帮助
  npm install -h

8. 处理npm i因版本问题导致的报错
  npm i --legacy-peer-deps
```

#### 4. 切换仓库镜像
```js
1. 查看当前下载仓库地址
  npm config get registry 

2. 切换到淘宝镜像地址
  npm config set registry https://registry.npm.taobao.org 

3. 切换回原地址
  npm config set registry http://registry.npmjs.org 
```

#### 5. package.json
```js
1. 创建package.json
 npm init -y

2. 根据package.json文件安装依赖
  npm install
  npm i
```
#### 6. 安装/卸载包
```js
1. 安装全局包
  npm install npm uninstall lodash -g 

2. 安装生产依赖 dependencies
  npm i lodash
  npm i lodash --save
  npm i lodash --S

3. 安装开发依赖 devDependencies
  npm i lodash --save-dev
  npm i lodash --D

4. 卸载包
  npm uninstall lodash
  npm uninstall lodash -g

5. 安装版本
  npm i lodash@^4.17.15
```

#### 7. 发布npm
```js
** 上传前要切换回原地址
  npm config set registry http://registry.npmjs.org 

1. 上传npm
  npm publish  
```



