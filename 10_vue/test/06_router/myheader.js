Vue.component("my-header", {
  template: `
  <header>
    <h1 style="color: blue;">这里是页头</h1>
    <h2>welcom dingding,<a href="javascript:;" @click="logout">注销</a> </h2>
    <ul>
      <li><a href="#/">首页</a></li>
      <li><router-link to="/details">详情页</router-link></li>
    </ul>
    <hr>
  </header>`,
  methods: {
    logout() {
      alert("注销成功,即将返回首页");
      this.$router.push("/");
    }
  }
});