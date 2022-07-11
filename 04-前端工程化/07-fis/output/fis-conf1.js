fis.match('*.{js,scss,png}', {
  release: '/assets/$0'
})

fis.match('**/*.scss', {
  rExt: '.css',  // 修改文件名
  parser: fis.plugin('node-sass'),
  optimizer: fis.plugin('clean-css')  // 压缩, 内置的插件
})

fis.match('**/*.js', {
  parser: fis.plugin('babel-6.x'),
  optimizer: fis.plugin('uglify-js')
})
