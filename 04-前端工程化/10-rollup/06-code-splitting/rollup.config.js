export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    // 代码拆分不可以是iife, 使用amd或commonjs
    format: 'amd'
  }
}
