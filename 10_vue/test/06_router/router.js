var router = new VueRouter({
  routes: [{
      path: "/",
      component: Home,
      children: [{
        path: "/",
        component: Index
      }, {
        path: "/details/:lid",
        component: Details,
        props: true //传参
      }]
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});