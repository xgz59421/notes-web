<template>
  <div>
    <h1>home page</h1>
    <nuxt-link to="/about">About页面</nuxt-link>
    <!-- asyncData 中获取 -->
    <p>{{title}}</p> 
    <!-- data 中获取 -->
    <p>{{bar}}</p>
    <FooComponent :posts='posts'/>
  </div>
</template>

<script>
import axios from 'axios'
// @指向根目录
import FooComponent from '@/components/FooComponent'
export default {
  name:'HomePage',
  // layout: 'default',
  layout: 'foo',  // 布局组件
  components: {
    FooComponent
  },

  // 当想要动态页面内容有利于SEO, 或提升首屏渲染速度时, 在asyncData中请求数据
  async asyncData () { 
    // 只能在页面中使用
    // 服务端渲染
    // asyncData 没有this, 因为他是组件初始化前调用的
    console.log(this);
    // 可以在node 查看日志
    console.log('asyncData');
    const res = await axios({
      method:'get',
      url: 'http://localhost:3000/app/data.json',
      data: {
        // id:requestUrl
      },
    })
    // console.log(res.data); 
    return res.data; // {posts：[], title: ''}
  },

  // 非异步数据, 或普通数据, 则初始化到data中即可
  data() {
  // asyncData() 的数据会与 data()的数据混合在一起
    return {
      bar: 'foo'
    }
  },
}
</script>