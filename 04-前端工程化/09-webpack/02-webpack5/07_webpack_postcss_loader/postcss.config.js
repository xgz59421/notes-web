module.exports = {
  plugins: [
    // require('autoprefixer')
    
    // 包含autoprefixer , 本例中 可以转换 '#12345678' 中的 78
    // 也就是'rgba'中的'a'
    require('postcss-preset-env') 
  ]
}