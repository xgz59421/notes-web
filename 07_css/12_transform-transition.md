## 转换,过渡
- [1. 转换 transform](#1)
- [2. 过渡 transition](#2)
--------
><h2 id='1'>1. 转换 transform</h2> 
- 改变元素在页面中位置，大小，角度，形状
- 2D 在x轴和y轴发生转换(4个)
- 3D 添加了z轴（1个）
- `transform：转换函数1 转换函数2 转换函数3.....;`
  ```css
  transform:translate(300px) rotate(45deg);
  ```
1. 位移 `transform: translate();`（改变元素在页面中的位置）
- `translateX()`,`translatex`, `translate(x)` 让元素在x轴上位移
- `translateY`,`translatey`, 让元素在y轴上移位
- `translate(x,y)` 分别设置x轴和y轴的偏移量
  ```css
  translatey(-200px)  单独设置y轴的偏移量  translatex(-200px)  单独设置x轴的偏移量
  ```
2. 缩放 `transform: scale(value);` 
    ```css
    value 取值:
      value>1 放大  
      0< value <1 缩小  
      value<0 x,y同时反转  
    ------------------
    1.scale(value) x,y轴同时缩放
    2.scale(x, y) x,y轴分别缩放
    3.scaleX(value) x
    4.scaleY(value) y
    ```
3. 旋转 `transform: rotate(ndeg);`  
  `n>0   顺时针`  
  `n<0   逆时针`  
   ```
   注意：
    1.旋转原点会影响旋转效果
        transform-origin: x y;
          取值:
            1.以px为单位的数字
            2.%
            3.x(left/center/right) y(top/center/bottom)
    2.旋转会连同坐标轴一起旋转，旋转之后的位移会有偏差
   ```
4. 倾斜`transform: skew(ndeg)`  
  - `skew(ndeg)`,`skewx(ndeg)` n>0 逆时针, n<0 顺时针  
  - `skewy(ndeg)` n<0 逆时针, n>0 顺时针
  - `skew(xdeg, ydeg)` 分别设置x,y 的倾斜角度
5. 3D转换
- 页面中所有的3D都是模拟,模拟3D需要透视距离
- 设置透视距离,必须写在3d转换元素的父元素上
- `perspective`:以px为单位的数字
- `3D的旋转`  
  ```css
  transform: rotatex(xdeg) 以x轴为中心轴的旋转 （烤羊腿）
            rotatey(ydeg) 以y轴为中心轴的旋转  (土耳其烤肉)
            rotatez(zdeg) 以z轴为中心轴的旋转  (摊煎饼)
            rotate3D(x,y,z,ndeg) x,y,z:改变的度数，对某一条轴产生多大的影响
                  0:不参与旋转
                  >0 参与
  ```
  
><h2 id='2'>2. 过渡 transition</h2> 
- 让css的值在一段时间内平缓变化的效果
1. 设置参与过渡的css属性名称  
`transition-property:`
    ```css
    取值  
      1.具体属性名称，多个名称用空格分开  
      2.all  所有可以过渡属性都参与  
    支持过渡的属性  
      1.颜色属性  
      2.大多数取值为数字的属性  
      3.转换  
      4.阴影  
    transition-property: background;
    transition-property: all;
    ```
2. 过渡持续时长   
  `transition-duration: s/ms;`
3. 过渡的时间曲线函数  
`transition-timing-function: value;`
    ```css
    取值:
      linear; 匀速
      ease-in; 持续加速
      ease-out; 持续减速
      ease-in-out; 慢速-加速-减速
      ease-ease; 慢速-加速-减速 (默认)
    ```
4. 过渡效果的延迟  
  `transition-delay:s/ms;`
5. 过渡代码的编写位置
- 写在原来的样式中，过渡效果，有去有回
- 写在伪类的样式中，过渡效果，有去无回
6. 过渡的简写方式	  
  `transition: property duration  timg-function delay;`
    ```bash
    # transition: all 3s ease 0.5s;
    ```
- 最简方式  `transitio:duration`;