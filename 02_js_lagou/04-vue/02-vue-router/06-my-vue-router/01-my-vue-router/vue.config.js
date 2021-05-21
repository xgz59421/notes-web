module.exports = {

  // Vue 的构建版本
  // 1. 运行时版: 效率更高,不支持template, 可以使用runder函数, vuecli 默认
  // 2. 完整版: 包含运行时版和编译器, 体积比运行时版大10k左右, 程序运行时把模板转换成render函数
  // 编译器作用: 把template编程runder函数

  // runtimeCompiler切换为 完整版, 默认false
  // runtimeCompiler: true
}
