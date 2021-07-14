
// 当前属于node环境, 要遵循 commonjs语法

const axios = require("axios")
// 导出es下默认 需要加.default
const createNodeHelpers = require("gatsby-node-helpers").default
// 分页插件
const { paginate } = require("gatsby-awesome-pagination")


//  将文章列表数据添加至数据层
exports.sourceNodes = async ({ actions }, { apiUrl }) => {
  const { createNode } = actions
  let articles = await loadArticles(apiUrl)
  const { createNodeFactory, generateNodeId } = createNodeHelpers({
    typePrefix: "articles",
  })
  const createNodeObject = createNodeFactory("list", node => {
    // 如果没有id, 则只会创建一条数据
    node.id = generateNodeId("list", node.slug)
    return node
  })
  articles.forEach(article => {
    createNode(createNodeObject(article))
  })
  // http://localhost:8000/___graphql
  // 此时 数据源就会有 allArticlesList 和 articlesList 数据了
}

//  通过数据源插件获取外部文章列表数据
async function loadArticles(apiUrl) {
  let limit = 100
  let offset = 0
  let result = []
  await load()
  async function load() {
    let { data } = await axios.get(`${apiUrl}/articles`, {
      params: { limit, offset },
    })
    result.push(...data.articles)
    if (result.length < data.articlesCount) {
      offset += limit
      await load()
    }
  }
  return result
}

//  根据文章列表数据创建带分页的文章列表页面
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  let { data } = await graphql(`
    query {
      allArticlesList {
        nodes {
          slug
        }
      }
    }
  `)

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: data.allArticlesList.nodes, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: "/list", // Creates pages like `/list`, `/list/2`, etc, 但是没有 /list/1 
    component: require.resolve("../../src/templates/list.js"), // Just like `createPage()`
  })
}
