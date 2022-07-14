## eslint
```js
eslint: 主流的js lint 工具, 检测js代码质量
https://eslint.bootcss.com/
```

- [1. eslint](#1)
- [2. stylelint](#2)
- [3. Prettier](#3)
- [4. Git Hooks](#4)
--------

#### <div id='1'>1. eslint</div>
```js
http://eslint.cn/docs/user-guide/configuring#configuring-rules
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
```

#### <div id='2'>2. stylelint</div>
```js
// yarn add stylelint --dev
// yarn add stylelint-config-standard --dev
// yarn add stylelint-config-sass-guidelines
.tylelintrc.js: 
  module.eports = {
  etends: "stylelint-config-standard"
  }
// yarn stylelint ./index.css
// yarn stylelint ./style.scss
```

#### <div id='3'>3. Prettier</div>
```js
`Prettier` 通用的前端代码格式化工具
1. 将css内容输出到 控制台
// yarn prettier .\style.css  
2. 格式化
// yarn prettier .\style.css  --write
3. 格式化 所有文件
// yarn prettier .  --write
```

#### <div id='4'>4. Hooks</div>
```js
1. 代码提交至仓库之前未执行 lint 工作
2. Git Hook 也称之为 git 钩子，每个钩子都对应一个任务
3. 通过  shell 脚本可以编写钩子任务触发时要具体执行的操作
4. git commit 钩子位置 :
// .git\hooks\pre-commit.sample 
// .git\hooks\pre-commit  去掉.sampe
`ESLint 结合 Git Hooks`
 Husky模块  可以实现 Git Hooks 的使用需求
//  yarn add husky --dev
//  yarn add lint-staged --dev
  "husky": {
    "hooks": {
      "pre-commit": "npm run precommit"   // 设置 scripts 中的执行脚本
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint",
      "git add"
    ]
  }
```