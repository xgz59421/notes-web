module.exports = {
  // 指定环境
  env: {
    browser: true,
    node: true,
    es6: false
  },
  // 继承共享的配置
  extends: [
    'standard'
  ],
  // 语法解析器配置
  parserOptions: {
    ecmaVersion: 2015
    // ecmaVersion: 11
    // ecmaVersion: 5  // 不可以使用const
  },
  // 配置校验规则
  rules: {
    // 值有三种, off, warn, error
    'no-alert': "error"
  },
  // 定义全局变量
  globals: {
    "jQuery": "readonly"
  }
}
