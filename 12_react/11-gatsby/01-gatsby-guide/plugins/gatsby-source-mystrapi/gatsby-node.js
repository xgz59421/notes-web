const axios = require("axios")
const pluralize = require("pluralize")
const createNodeHelper = require("gatsby-node-helpers").default

async function sourceNodes({ actions }, configOptions) {
  const { createNode } = actions
  const { apiUrl, contentTypes } = configOptions
  // Post -> posts  Product -> products
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))

  // 从外部数据源中获取数据
  let final = await getContents(types, apiUrl)
  for (let [key, value] of Object.entries(final)) {
    // 1. 构建数据节点对象 allPostsContent allProductsContent
    const { createNodeFactory } = createNodeHelper({
      typePrefix: key,
    })
    const createNodeObject = createNodeFactory("content")
    // 2. 根据数据节点对象创建节点
    value.forEach(item => {
      createNode(createNodeObject(item))
    })
  }
}

async function getContents(types, apiUrl) {
  const size = types.length
  let index = 0
  // {posts: [], prodcuts: []}
  const final = {}
  // 初始调用
  await loadContents()
  async function loadContents() {
    if (index === size) return
    console.log(`${apiUrl}/${types[index]}`)
    let { data } = await axios.get(`${apiUrl}/${types[index]}`)
    final[types[index++]] = data
    await loadContents()
  }
  return final
}

module.exports = {
  sourceNodes,
}
