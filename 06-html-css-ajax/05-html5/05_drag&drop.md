# drag & drop

>1.拖动源对象(会动)-触发三个事件
```js
整个过程:dragstart*1+drag*n+dragend*1
// 开始拖动
item.ondragstart = function () {
  pid = this.id;
  console.log("ondragstart", this.id);
}
// 拖动中
item.ondrag = function () {
  // console.log("ondrag");
}
// 拖动结束
item.ondragend = function () {
  // console.log("ondragend");
}
```
>2.拖动目标对象(不动)-触发四个事件(!!)
```js
// 拖动的进入
trash.ondragenter = function () {
  // console.log("ondragenter");
}
// 拖动的悬停
trash.ondragover = function (e) {
  // console.log("ondragover");
  // 默认行为: 悬停结束后立刻触发离开
  e.preventDefault();
}
// 拖动的离开
trash.ondragleave = function () {
  // console.log("ondragleave");
}
// 拖动的释放
trash.ondrop = function () {
  // console.log("ondrop");
}
整个过程1:dragenter*1+dragover*n+dragleave*1
整个过程2:dragenter*1+dragover*n+drop*1
```
