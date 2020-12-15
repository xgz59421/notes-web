var Details = {
  template: `
  <div>
    <h1 style="color:orange">这是详情页</h1>
    <h2>查看{{lid}}号商品详细信息</h2>
    <h2>查看{{$route.params.lid}}号商品详细信息</h2>
  </div>
  `,
  data() {
    return {
      // lid: 0
    }
  },
  props: ["lid"], //接收参数
  created() {
    // this.lid = this.$route.params.lid;
    console.log(this.$route.params);
  }
};