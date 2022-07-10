#!/usr/bin/env node
console.log('-----zh-gulp begin-----')
// 如果删掉gulpfile.js 可以如下执行
// yarn gulp build --gulpfile ./module_modules/zh-gulp/lib/index.js --cwd .
// 配置环境变量, 上面的语句添加到process如下
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
// 自动找package.json main下的 'lib/index.js'
// process.argv.push(require.resolve('../lib/index.js'))
process.argv.push(require.resolve('..'))
require('gulp/bin/gulp')
