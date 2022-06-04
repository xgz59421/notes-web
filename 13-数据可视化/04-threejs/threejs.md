### three.js
https://threejs.org/
https://threejs.org/docs/index.html#manual/zh/zh

虚拟场景
───────────╮  渲染器
           │────────────  渲染结果
───────────╯ 执行渲染操作
虚拟相机


#### 场景
```js
场景就是一个显示呈现的舞台
```
#### 相机
```js
1. 正投影相机
  远处近处的内容做等大小呈现处理
2. 透视相机
  1.符合心里习惯,近大远小
  2.THREE.PerspectiveCamera = function(for, aspect, near, far)
    fov — 摄像机视锥体垂直视野角度  (45度为人体视觉最舒服角度)
    aspect — 摄像机视锥体长宽比
    near — 摄像机视锥体近端面  (小于这个值, 则不能呈现)
    far — 摄像机视锥体远端面  (大于这个值, 则不能呈现)
```
#### 渲染
```js
渲染器决定了内容如何呈现至屏幕
```
#### 几何体
