## eslint
- eslint  主流的js lint 工具, 检测js代码质量
```js
1. eslint 安装 
  // yarn add eslint --dev
2. 创建 .eslintrc.js 
  // yarn eslint --init
  How would you like to use ESLint? ... 
  To check syntax only
  To check syntax and find problems
  > To check syntax, find problems, and enforce code style
  //  语法, 问题, 代码风格
3. 运行 eslint
  // yarn eslint ./xxx.js
4. 修复错误
  // yarn eslint ./xxx.js --fix  修正错误
5. ESLint 配置注释
  // eslint-disable-line
  // eslint-disable-line no-template-curly-in-string 

--------------
ESLint 结合自动化工具
1. 安装 eslint 模块
2. 安装 eslint-loader 模块
3. 初始化 .eslintrc.js 配置文件
// yarn add stylelint --dev
// yarn add stylelint-config-standard --dev
.tylelintrc.js: 
  module.eports = {
  etends: "stylelint-config-standard"
  }
// yarn stylelint ./index.css
```