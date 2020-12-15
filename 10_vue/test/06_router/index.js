var Index = {
  template: `
  <div>
    <h1 style="color:red">这是首页</h1>
    <ul>
      <li>
        <router-link to="/details/1">查看1号商品详情</router-link>
      </li>
      <li>
        <a @click="toDetails(2)">查看2号商品详情</a>
      </li>
      <li>
        <router-link to="/details/3">查看3号商品详情</router-link>
      </li>
    </ul>
  </div>
  `,
  methods: {
    toDetails(lid) {
      this.$router.push("/details/" + lid);
    }
  }
};