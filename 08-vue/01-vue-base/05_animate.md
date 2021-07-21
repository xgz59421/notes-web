
--------
><h2 id='1'>1. 原理</h2>
- Vue 提供了 `transition` 的封装组件
- 在下列情形中，可以给任何元素和组件`添加进入/离开过渡`
  ```
  条件渲染 (使用 v-if)
  条件展示 (使用 v-show)
  ```
  ```css
  v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
  v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
  v-enter-to：在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
  v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
  v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
  v-leave-to：定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
  ```
  <img src='img/transition.png' width='70%'/>
- `transition-group`:
  ```html
  <ul>
    <transition-group name="fade">
      <li v-for="n in 4" :key="n" v-show="n==curPage">
        <a href="#" class="link"></a>
      </li>
    </transition-group>
  </ul>
  ```
- `transition`
  ```html
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
  ```
- `css`
  ```css
  .fade-enter-active, .fade-leave-active{
    /* 对所有效果添加动画,时长0.5 */
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  ```

