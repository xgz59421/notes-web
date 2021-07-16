
## 🚀 Quick start
1. **安装 Gatsby CLI.**
    ```
    npm install -g gatsby-cli
    ```
2.  **Create a Gatsby**
    ```
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```
3.  **npm install**
    ```js
    \ 根目录
    \plugins\gatsby-plugin-article
    \plugins\gatsby-source-list
    这3个目录下执行 `npm install`
    ```
4. **.default**
    ```js
    node下使用 es模块 引入默认导出 
    const createNodeHelpers = require("gatsby-node-helpers").default
    ```