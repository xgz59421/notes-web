```js
asset module type (asset 资源模块)
可以代替 'url-loader'

asset/resource ---> 'file-loader'( 相当于拷贝资源 )
asset/inline ---> 'url-loader' (data uri, base64)
asset/source ---> 'raw-loader'

asset 包含上述
  parser 设置limit 临界值

```