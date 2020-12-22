## npm
官方链接: 
 [https://docs.npmjs.com/cli/v6](https://docs.npmjs.com/cli/v6)
  ```css
  包(package)： 是第三方模块  
  npm：是用来管理包的工具，包含下载安装、更新、卸载、上传...  
  npm在安装nodejs的时候会附带的安装 
  ``` 
----
#### 1、帮助
  ```bash
  - 查看帮助信息
  # npm -help (aliase -h)  
  - 查看安装相关的命令帮助
  # npm install -h  
  ```
#### 2、查看Npm版本
  ```bash
  # npm -v
  ```
#### 3、查看Npm配置
  ```bash
  # npm config list 
  ```
#### 4、切换仓库到淘宝镜像
  ```bash
  - 查看当前下载仓库地址
  # npm config get registry 
  - 修改npm下载仓库地址
  # npm config set registry https://registry.npm.taobao.org 
  - 原地址
  # npm config set registry http://registry.npmjs.org 
  ```
#### 5、创建package.json
  ```bash
  # npm init -y
  ```
#### 6、卸载包
  ```bash
  # npm uninstall 
  ```
#### 6、安装npm包
  ```bash
  - 根据package.json文件安装
  # npm install 
  - 将包安装到全局目录中(npm config get prefix所对应的目录)
  # npm install -g 
  - 此命令会将包安装到`node_modules`中，同时修改`package.json`文件
  # npm install --save 
  - 安装版本5的swiper
  # npm i swiper@^5  
  ```


