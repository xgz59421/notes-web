export default {
  // 多入口打包
  // input: ['src/index.js', 'src/album.js'],
  // 或者
  input: {
    foo: 'src/index.js',
    bar: 'src/album.js'
  },
  output: {
    dir: 'dist',
    format: 'amd'
  }
}

