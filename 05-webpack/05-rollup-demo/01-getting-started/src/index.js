// 导入模块成员
import { log } from './logger'
import messages from './messages'

// 使用模块成员
const msg = messages.hi

log(msg)

// yarn rollup ./src/index.js --format  iife --file dist/bundle.js