### 修饰符
##### 事件修饰符
```html
// 修饰符可以串联
<a v-on:click.stop.prevent="doThat"></a>

.stop
.prevent
.capture
.self
.once
.passive
.lazy
.number
.trim
```

##### 按键修饰符
```html
<input v-on:keyup.enter="submit">
按键码
<input v-on:keyup.13="submit">
按键码的别名
.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

可以通过全局 config.keyCodes 对象自定义按键修饰符别名
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```
