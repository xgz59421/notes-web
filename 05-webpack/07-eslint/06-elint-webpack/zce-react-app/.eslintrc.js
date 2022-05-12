module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    // 代替 rules 和 plugins 引入react
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    // 'react/jsx-uses-react': 2, // 2代表error
    // 'react/jsx-uses-vars': 2
  },
  plugins: [
    // // yarn add eslint-plugin-react --dev
    // // import React from 'react'
    // // import ReactDOM from 'react-dom'
    // // 解决引用了react 但是没有使用
    // 'react'
  ]
}
