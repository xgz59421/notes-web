
# flow工具
```js
1. 安装依赖 `flow-bin`
2. 添加注释标记 
  //@flow
3. vscode 关闭javascript validate 
4. 创建配置文件
  // yarn flow init
5. 开启服务/关闭服务
  // yarn flow
  // yarn flow stop

`移除flow注解, 输出可执行的js文件`
方法1: 
  1. 安装依赖 
    // flow-remove-types
  2. 输出没有注解的js, 到dist文件
    // yarn flow-remove-types src -d dist
方法2: 
  1. 安装依赖
    @babel/core	@babel/cli @babel/preset-flow
  2. 添加文件
    .babelrc
    // 内容
    {
      "presets": ["@babel/preset-flow"]
    }
  3. 输出没有注解的js, 到dist文件
    // yarn babel src -d dist
-----------------
安装vs 插件查看错误  
// flow language support (略卡顿)
```