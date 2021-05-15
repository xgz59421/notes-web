import json from 'rollup-plugin-json'
// yarn rollup --config
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    // 导入json文件的插件
    // yarn add rollup-plugin-json --dev
    json()
  ]
}
