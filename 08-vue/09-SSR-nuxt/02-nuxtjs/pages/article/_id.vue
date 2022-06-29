<template>
  <div>
    <h1>{{article.title}}</h1>
    <!-- <p>id: {{$route.params.id}}</p> -->
    <p>{{article.body}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ArticlePage',
  // context 上下文对象
  async asyncData(context) {
    const {data} = await axios({
      method: 'get',
      url: 'http://localhost:3000/app/data.json'
    })
    // asyncData 中this 为 undefined
    // console.log(this.$route.params.id);
    // console.log(context);
    console.log(context.params.id);
    const id = parseInt(context.params.id);
    console.log(data.posts);
    return {
      article: data.posts.find(item=>item.id == id)
    }
  },
}
</script>