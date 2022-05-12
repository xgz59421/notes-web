```js
npx eslint --init (选择typescript)

.eslintrc.js
module.exports = {
  // 语法解析器
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ]
}


npx eslint .\index.ts

```