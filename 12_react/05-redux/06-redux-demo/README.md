## redux工作流程

```js
1.component
    ↓  dispatch
2.action
    ↓  
3.saga (没有中间件则跳过此步骤)
    ↓   takeEvery(接受action, 处理异步)
    ↓   put(另外一个action)
4.reducer
    ↓   根据action.type处理 state
    ↓   subscribe 更新component
5.component   

```

## component 使用state, dispatch
```js
`Modal组件`:
  function Modal ({showStatus, show, hide, show_async}){
    onClick={show_async}
  }
  const mapStateToProps = state => ({
    showStatus: state.modal.show
  });
  const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)
  // 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候 会帮助我们重新渲染组件
  // 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
  // 3. connect 方法可以让我们获取 dispatch 方法
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);

`Counter组件`:
  import { useDispatch, useSelector } from 'react-redux';
  const dispatch = useDispatch();
  // state: {couter:{count}, modal:{xxxxx}}
  const {count} = useSelector(state => state.counter)

  function Counter () {
    onClick={()=>(dispatch(action))}
    onClick={()=>(dispatch(action(payload)))}
  }
```