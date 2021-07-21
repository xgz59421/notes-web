import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    json(),
    // 使用npm模块名称 导入第三方模块,否则导入不进去
    resolve()
  ]
}
