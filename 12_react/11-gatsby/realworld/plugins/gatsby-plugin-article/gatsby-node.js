exports.createPages = async ({ graphql, actions }) => {
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
  data.allArticlesList.nodes.forEach(article => {
    createPage({
      path: `/article/${article.slug}`,
      component: require.resolve("../../src/templates/article.js"),
      // 传递的参数
      context: {
        slug: article.slug,
      },
    })
  })
}
