export default {
  // input: ['src/index.js', 'src/album.js'],
  // 多入口打包
  input: {
    foo: 'src/index.js',
    bar: 'src/album.js'
  },
  output: {
    dir: 'dist',
    format: 'amd'
  }
}

