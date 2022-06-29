<template>
  <div>
    <Layout>
      <h1>post1 page</h1>
      <p>axios获取数据</p>
      <ul>
        <li v-for="item in posts" :key="item.id">
          <g-link to="/my-page">{{item.title}}</g-link>
        </li>
      </ul>
    </Layout>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostPage1',
  metaInfo: {
    title: 'post1'
  },
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')
    this.posts = data
  },
}
</script>