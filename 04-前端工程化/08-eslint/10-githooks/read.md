#### git hooks
```js
eslint 结合 git hooks
安装: 
npm i husky -D
npm i lint-staged -D

package.json
"scripts": {
  "lint": "eslint ./index.js",
  "precommit": "lint-staged"
},
"husky": {
  "hooks": {
    // 给pre-commit钩子 定义任务
    // "pre-commit": "npm run lint"
    "pre-commit": "npm run precommit"
    // 或
    // "pre-commit": "yarn precommit"
  }
},
"lint-staged": {
  // 后续的任务
  "*.js": ["eslint", "git add"]
}

// 检查
// yarn eslint ./index.js 

// 修复
//  yarn eslint .\index.js --fix
```