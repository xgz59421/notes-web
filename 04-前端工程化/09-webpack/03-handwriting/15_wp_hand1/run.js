let webpack = require('webpack')
let options = require('./webpack.config')

let compiler = webpack(options)

compiler.run((err, stats) => {
  console.log(err)
  console.log(stats.toJson({
    entries: true,
    chunks: false,
    modules: false,
    assets: false
  }))
})

/**
 * 主要的钩子函数
 * beforeRun
 * run
 * thisCompilation
 * compilation
 * beforeCompile
 * compile
 * make
 * afterCompile
 */