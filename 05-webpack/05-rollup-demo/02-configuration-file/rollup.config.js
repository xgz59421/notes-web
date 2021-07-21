export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'  // 输出格式
  }
}

// yarn rollup --config
// 指定打包配置文件 
// yarn rollup --config rollup.config.js