#!/usr/bin/env node
console.log('zce-pages');
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
// 自动找package.json main下的 'lib/index.js'
// process.argv.push(require.resolve('../lib/index.js'))
process.argv.push(require.resolve('..'))
console.log('zce-pages2');
require('gulp/bin/gulp')
