```js
main.js
const a = 1  没有使用过a

npm run serve 启动
npm run lint 解决大部分错误

// 目测 两个效果是一样的 
"lint": "vue-cli-service lint"
      ||
"lint": "eslint --fix --ext .js,.vue src"
```