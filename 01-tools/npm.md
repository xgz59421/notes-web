## npm
```
官方链接: 
 [https://docs.npmjs.com/cli/v6](https://docs.npmjs.com/cli/v6)
 npm是用来管理包的工具，包含下载安装、更新、卸载、上传...  
  npm在安装nodejs的时候会附带的安装 
```

#### 1. 登录
```bash
1. 登录npm
  切换回原地址 
  npm config set registry https://registry.npmjs.org
  npm login
    username: xgz59421
    password: 同github
    email: 87256657@qq.com
    Enter one-time password: 看邮件
2. 查看登录
  npm whoami 
```

#### 2. 查看
```bash
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
```bash
1. 查看当前下载仓库地址
  npm config get registry 

2. 切换到淘宝镜像地址
  npm config set registry https://registry.npm.taobao.org

3. 切换回原地址
  npm config set registry https://registry.npmjs.org
```

#### 5. package.json
```bash
1. 创建package.json
 npm init -y

2. 根据package.json文件安装依赖
  npm install
  npm i
```
#### 6. 安装/卸载包
```bash
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
```bash
npm whoami 查看是否登录npm
其他的具体查看 第一章

发布npm前要切换回原地址
npm config set registry https://registry.npmjs.org 
npm publish
或
npm publish  --registry https://registry.npmjs.org 
```

#### 8. npm link
```bash
假如我们想自己开发一个依赖包, 每次修改都要重新发布到npm比较麻烦
可以本地测试一下依赖包的源码

具体用法:
1. cd到模块目录,进行全局link:
  npm link

  查看全局安装包
  npm list -g

2. cd到项目目录: 
  npm link 模块名(package.json中的name)

3. 解除link:
  解除项目和模块link项目目录下:
    npm unlink 模块名
  解除模块全局link模块目录下:
    npm unlink 模块名
```



