```js
为什么需要 Babel?
JSX TS ES6+ ---> 浏览器平台直接使用
转换
比如postcss
处理 JS 兼容

1. babel核心语法转换
npm i @babel/core -D 
  安装完后不能直接使用

2. 可以在命令行使用
npm i @babel/cli -D 
  npx babel src --out-dir build
3. 转换箭头函数
npm i  @babel/plugin-transform-arrow-functions -D  
  npx babel src --out-dir build --plugins=@babel/plugin-transform-arrow-functions
4. 转换作用域 (const, let ->var)
npm i  @babel/plugin-transform-block-scoping -D 
  npx babel src --out-dir build --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping

***. babel预设 (babel插件集合, 包含之前的babel插件)
npm i @babel/preset-env
  npx babel src --out-dir build --presets=@babel/preset-env

```