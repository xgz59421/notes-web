const marked = require('marked')
// 1. 通过module.exports导出一个函数
// 2. 该函数默认参数一个参数source(即要处理的资源文件)
module.exports = source => {
  // console.log(source)
  // return 'console.log("hello ~")'
  // 3. 在函数体中处理资源（Loader配置响应的Loader后）
  const html = marked(source)
  // return html
  // return `module.exports = "${html}"`
  // return `export default ${JSON.stringify(html)}`

  // 4. 通过return返回最终打包后的结构（这里返回的结果需为字符串形式）
  return html
}
