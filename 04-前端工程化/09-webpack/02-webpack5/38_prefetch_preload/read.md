```js
浏览器空闲时加载 
webpackPrefetch:true 

oBtn.addEventListener('click', () => {
  import(
    /*webpackChunkName:'utils' */
    /*webpackPrefetch:true */
    './utils').then(({ default: element }) => {
      console.log(element)
      document.body.appendChild(element)
    })
})

与浏览器 index.js 并行下载
webpackPreLoad:true 

oBtn.addEventListener('click', () => {
  import(
    /*webpackChunkName:'utils' */
    /*webpackPreLoad:true */
    './utils').then(({ default: element }) => {
      console.log(element)
      document.body.appendChild(element)
    })
})
```