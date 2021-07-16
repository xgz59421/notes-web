import React, { useEffect } from "react"
import Banner from "../components/Banner"
import Toggle from "../components/Toggle"
import Sidebar from "../components/Sidebar"
import { graphql, Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"

export default function List({ data, pageContext }) {
  const { skip, limit } = pageContext
  // TODO 动态获取文章列表最新的数据
  const dispatch = useDispatch()
  const articleReducer = useSelector(state => state.articleReducer)
  console.log(articleReducer)
  useEffect(() => {
    dispatch({
      type: "loadArticles",
      limit,
      offset: skip,
    })
  }, [])
  return (
    <div className="home-page">
      <Banner />
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Toggle />
            <Lists
              // 1. 动态获取数据
              // 2. 数据源数据
              articles={articleReducer.articles || data.allArticlesList.nodes}
            />
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

function Lists({ articles }) {
  return articles.map(article => (
    <div key={article.slug} className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={article.author.image} />
        </a>
        <div className="info">
          <a className="author">{article.author.username}</a>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> {article.favoritesCount}
        </button>
      </div>
      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  ))
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allArticlesList(skip: $skip, limit: $limit) {
      nodes {
        slug
        author {
          image
          username
        }
        createdAt
        description
        title
        favoritesCount
        slug
      }
    }
  }
`
