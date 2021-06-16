const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\xampp\\htdocs\\notes_web\\02_js_lagou\\04-vue\\08-SSG\\project-gridsome-blog\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
