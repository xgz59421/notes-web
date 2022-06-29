<template>
  <div>
    <Layout>
      <h1>post2 page</h1>
      <h2>{{$page.allPost.totalCount}}</h2>
      <p>this.$page.allPost</p>
      <p>预先获取数据</p>
      <ul>
        <li v-for="item in $page.allPost.edges" :key="item.node.id">
          <g-link :to="item.node.path">{{item.node.title}}</g-link>
        </li>
      </ul>
    </Layout>
  </div>
</template>

<page-query>
query {
	allPost {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'PostPage2',
  metaInfo: {
    title: 'post2'
  },
  mounted() {
    console.log(this.$page.allPost)
  },
}
</script>