### 运行 npm run dev
1. 等http://localhost:8080 启动后, 进行开发
2. 也可以运行打包dist后的包, main.js中 修改 load path.join(__dirname, './dist/index.html') 
3. remote.app.getPath('userData') 数据持久化存放的位置
   我的电脑是 C:\Users\zh\AppData\Roaming\electron-vue-markdown
4. 自定义一个当前磁盘里存放文件的路径
   export const savedPath = remote.app.getPath('documents') + '/electron'
5. 数据交互使用的是 vuex + bus

### 开发引入的包
1. electron-is-dev: 判断是否为开发环境 
2. concurrently: 连接多个命令，中间使用空格分开
3. wait-on：等待某个结果执行之后再去执行后续的命令
4. cross-env : 跨平台的环境变量设置 
5. wangeditor-vue: 编辑器
6. uuid 唯一id
7. electron-store 数据持久化


### 遇见的问题: 
1. 使用最新版本的electron 使用 window.require 会报错, 所以降低了electron的版本, 也可能和先右的node版本有关系
2. 引入electron包后, 第一次运行有时会报错, 进入 node_modules\electron, 手动 node install.js解压 dist包
3. leftBox.vue中 v-for 中使用了 ref, 由于ref是在dom渲染后有效, 则直接使用会不生效, 需要$next()
4. 鼠标右键菜单添加, 判断右键按下的地方是否包含了'file-box'类名