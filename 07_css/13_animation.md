

## 动画
- 动画是元素从一种状态逐渐变为另外一种状态(多个状态)
- 动画是过渡的升级版 
>### 1. 使用关键帧,来控制动画的每一个状态  
  1. 这一帧执行的时间点  
  2. 这一帧执行的样式  
>### 2. 使用动画的步骤  
  1. 声明动画  
      ```css
      @keyframes 动画名称{
        关键帧1 0%{样式}
        关键帧2 ....
      }
      ```  
  2. 调用动画   
      ``` bash
      1.定义调用动画的名称
      # animation-name: 动画名称;
      2.动画的持续时间
      # animation-duration: 3s;
      3.动画的时间曲线函数
      # animation-timing-function: ease/linear/ease-in;
      4.动画的延迟
      # animation-delay: 1s;
      ``` 
  3. 动画的专有属性  
  - 动画的播放次数  
  `animation-iteration-count:` 具体次数/infinite;
  - 动画的播放顺序
  `animation-direction :`  
  取值:  
    - `normal` 默认 0%~100%  
    - `reverse` 100%~0%  
    - `alternate` 轮流播放 第一遍 0% ~ 100%, 第二遍 100% ~ 0% ....  
  4. 动画的简写方式  
  `animation:name duration timg-function delay  count direction;`  
      ```css
      animation:move 3s ease 1s 3 alternate;
      ```
  5. 最简方式  
  `animation:name  duration；`
  6. 动画的填充模式  
  `animation-fill-mode: backwards;` 在延迟时间内，显示动画的第一帧  
  `forwards;`  动画结束之后，显示动画的最后一帧  
  `both;` 两个都要  
  `none;` 默认 
  7. 动画的播放模式  
  `animation-play-state: paused;`    
  `animation-play-state: running;`
>## 3. 动画的兼容性
- 如果需要兼容低版本浏览器, 需要添加前缀
- 只有在声明动画添加内核
  ```css
  @keyframes 动画名称{}
  @-webkit-keyframes 动画名称{}
  @-ms-keyframes 动画名称{}
  @-o-keyframes 动画名称{}
  @-moz-keyframes 动画名称{}
  ```
>## 4. 第三方animate.css的使用
- https://animate.style/
- https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css