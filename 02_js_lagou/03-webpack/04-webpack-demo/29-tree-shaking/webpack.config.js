module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  // 集中配置优化功能
  optimization: {
    // tree shaking 摇树(去掉未引用代码)
    // 生产环境下 自动开启
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,
    // 压缩输出结果
    // minimize: true
  }
}
