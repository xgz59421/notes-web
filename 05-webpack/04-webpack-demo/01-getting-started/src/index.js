import createHeading from './heading.js'

const heading = createHeading()

document.body.append(heading)
// 不配置webpack.config.js 默认以src/index.js为打包入口
// yarn webpack 
