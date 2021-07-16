/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-create-client-paths",
      // 以app 客户端路由
      options: { prefixes: ["/app/*"] },
    },
    {
      resolve: "gatsby-source-list",
      options: { apiUrl: "https://conduit.productionready.io/api" },
    },
    // gatsby-plugin-article 是基于 上面的 gatsby-source-list 的数据生成的
    // 所以要放在下面
    "gatsby-plugin-article",
    // 禁止进入默认的404页面的插件
    "gatsby-disable-404",
  ],
}
