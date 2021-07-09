
function createStore(reducer, preloadedState, enhancer) {
  // 状态
  var currentState = preloadedState;
  // 订阅者
  var currentListeners = [];

  // 获取状态
  function getState() {
    return currentState;
  }

  // 用于触发action的方法
  function dispatch(action) {
    currentState = reducer(currentState, action)
    console.log(currentState, action);
    for (var i = 0; i < currentListeners.length; i++) {
      var listener = currentListeners[i];
      listener();
    }
  }
  // 订阅状态的改变
  function subscribe(listener) {
    currentListeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}