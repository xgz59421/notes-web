#### 代码懒加载(按需加载)

```js
oBtn.addEventListener('click', () => {
  import('./utils').then(({ default: element }) => {
    console.log(element)
    document.body.appendChild(element)
  })
})
```