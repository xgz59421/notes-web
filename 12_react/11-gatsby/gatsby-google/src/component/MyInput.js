import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/input.module.less"

function getPic(data, pngName) {
  let img = {}
  data.forEach(el => {
    if (el.fixed.originalName === pngName) {
      img = el.fixed
    }
  });
  return img
}

function MyInput() {
  const img = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fixed {
            src
            srcSet
            width
            height
            originalName
          }
        }
      }
    }
  `)
  return (
    <div className={styles.container}>
      <Img fixed={getPic(img.allImageSharp.nodes, 'googlelogo.png')}/>
      <div className={styles.box}>
        <i/>
        <input placeholder='在google上搜索或输入一个网址'/>

      </div>
    </div>
  )
}

export default MyInput


