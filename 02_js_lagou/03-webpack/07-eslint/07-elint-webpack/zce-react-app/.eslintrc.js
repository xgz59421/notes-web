module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    // 'react/jsx-uses-react': 2,
    // 'react/jsx-uses-vars': 2
  },
  // plugins: [
  //   // yarn add eslint-plugin-react --dev
  //   // import React from 'react'
  //   // import ReactDOM from 'react-dom'
  //   // 解决引用了 但是没有使用
  //   'react'
  // ]
}
