##### 安装 node / pm2 / 配置相关路径
###### 方式一
```shell
nver='v14.16.1' && ndir="node-${nver}-linux-x64" && nfile="${ndir}.tar.xz" && cd /usr/local && wget https://nodejs.org/dist/$nver/$nfile && tar xvf $nfile && mv $ndir nodejs && rm -rf $nfile && cd nodejs/bin && ln -sf `readlink -f node` /usr/bin/node && ln -sf `readlink -f npm`  /usr/bin/npm && ln -sf `readlink -f npx`  /usr/bin/npx && npm config set registry http://registry.npm.taobao.org && npm i pm2 -g && ln -sf `readlink -f pm2`  /usr/bin/pm2 && cd
```
命令解释
```shell
# 命令1 && 命令2   命令1执行完成后，再执行命令2
nver='v14.16.1'                 #定义版本变量 nver
ndir="node-${nver}-linux-x64"   #定义目录变量 ndir 
nfile="${ndir}.tar.xz"          #定义压缩文件名变量 nfile

cd /usr/local                   #切换目录
wget https://nodejs.org/dist/$nver/$nfile  $下载文件
tar xvf $nfile    #文件拆包解压
mv $ndir nodejs   #对目录重命名
rm -rf $nfile     #删除压缩包文件

cd nodejs/bin     #进入目录

# 获取真实路径, 软链接到 /usr/bin 中, 使命令全局可用. -f为强制创建，会覆盖
ln -sf `readlink -f node` /usr/bin/node
ln -sf `readlink -f npm`  /usr/bin/npm
ln -sf `readlink -f npx`  /usr/bin/npx


# 配置镜像
npm config set registry http://registry.npm.taobao.org
# 全局安装pm2
npm i pm2 -g   
# 建立软链接. 使pm2全局使用
ln -sf `readlink -f pm2`  /usr/bin/pm2
# 返回家目录
cd

```

###### 方式二
```shell
( github 不稳定，暂时不用这种方式 )

# 1.安装 nvm
cd
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# 2.断开+重新连接 或 执行下面命令使 nvm 生效
  source ~/.bashrc # bash
# source ~/.zshrc  # zsh  MacOS ?

# 3.安装 node 稳定版
nvm install --lts

# 4.安装 pm2 到全局
npm i pm2 -g

# 5.建立软链接
nver='v14.16.1' && cd /root/.nvm/versions/node/$nver/bin &&  ln -sf `readlink -f node` /usr/bin/node && ln -sf `readlink -f npm`  /usr/bin/npm && ln -sf `readlink -f npx`  /usr/bin/npx && ln -sf `readlink -f pm2`  /usr/bin/pm2 && cd

```

##### pm2 测试server.js
```js
方式一: node启动:
  node server.js
方式二: pm2 启动方式: 
// 在不停机的情况下, 在后台保持活动状态
  pm2 start 'node server.js' --name '起一个名字' 
  
  pm2 list // 查看应用列表
  pm2 stop // 停止应用
  pm2 delete 0/name  // 删除应用
  pm2 stop // 停止应用
  pm2 reload // 重载应用
  pm2 restart // 重启应用
```