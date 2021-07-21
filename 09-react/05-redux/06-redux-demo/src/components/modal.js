import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../store/actions/modal.actions';

function Modal ({showStatus, show, hide, show_async}) {
  const styles = {
    width: 200,
    height: 200,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -100,
    marginTop: -100,
    backgroundColor: 'skyblue',
    display: showStatus ? 'block': 'none'
  }
  return <div>
    <button onClick={show_async}>显示</button>
    <button onClick={hide}>隐藏</button>
    <div style={styles}></div>
  </div>
}

const mapStateToProps = state => ({
  showStatus: state.modal.show
});

const mapDispatchToProps = dispatch => bindActionCreators(modalActions, dispatch)
// 1. connect 方法会帮助我们订阅store 当store中的状态发生更改的时候 会帮助我们重新渲染组件
// 2. connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件
// 3. connect 方法可以让我们获取 dispatch 方法
export default connect(mapStateToProps, mapDispatchToProps)(Modal);