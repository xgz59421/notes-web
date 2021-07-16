/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "hello Gatsby",
    description: "description in gatsby-node.js",
    author: "gatsby",
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: `${__dirname}/json/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "xml",
        path: `${__dirname}/xml/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiUrl: "localhost:1337",
    //     contentTypes: ["Post"],
    //   },
    // },
    {
      resolve: "gatsby-source-mystrapi",
      options: {
        apiUrl: "http://localhost:1337",
        contentTypes: ["Post", "Product"],
      },
    },
    "gatsby-transformer-xml",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less",
  ],
}
