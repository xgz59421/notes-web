module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // false: 不对当前的JS处理做 polyfill 的填充
        // usage: 依据用户源代码当中所使用到的新语法进行填充
        // entry: 依据我们.browserslistrc筛选出来的浏览器进行填充
            // 使用entry需要手动引入
            // import "core-js/stable";
            // import "regenerator-runtime/runtime"
        useBuiltIns: 'usage',
        corejs: 3 // 设置 corejs 版本, 
      }
    ]
  ]
}