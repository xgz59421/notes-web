// rncs

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  state = {result: []};

  componentDidMount() {
    let url = 'https://api.apiopen.top/getImages?count=5&page=21';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});

        // 定时器在创建之后, 不用的时候需要销毁; 否则会浪费系统资源 甚至报错崩溃

        // 请求完毕后, 需要启动定时器 -- 每2.5秒滚动到下一张图

        // JS语法:  属性a = 6;   变量不存在时会自动创建
        this.timer = setInterval(() => {
          // 滚动下一页
          let nextP = this.curP + 1;

          // 判断如果最后一张, 则跳转回到第一张
          if (nextP == this.state.result.length) nextP = 0;

          // 需要一个变量 关联到 滚动视图,  然后通过变量来操作滚动视图!
          // current:代表变量当前绑定的组件
          this.fl.current.scrollToIndex({index: nextP});
          // bug: 滚动特别快,  如果开启debug模式 可能导致图片滚动特别快! 此时关闭即可!
        }, 2500);
      });
  }

  // 卸载周期
  componentWillUnmount() {
    // 清理定时器!
    clearInterval(this.timer);
  }

  // 变量 关联 组件 的固定写法:
  fl = React.createRef();

  render() {
    return (
      // horizontal: 横向滚动
      // pagingEnabled: 按页滚动
      // onScroll: 滚动事件, 滚动视图滚动时自动触发!
      // ref: 固定属性, 用于关联变量
      <FlatList
        ref={this.fl}
        data={this.state.result}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        horizontal
        pagingEnabled
        onScroll={this._onScroll}
      />
    );
  }

  _onScroll = (event) => {
    // RN的事件传参 不是 DOM 的默认事件.  而是 RN 自己提供的独特同步事件
    // RN事件: 传入之后就会自动把所有信息改为null,  无法打印查看
    // 要想打印查看事件中的值, 则必须使用 event.persist()
    // event.persist(); //只对打印输出有影响, 对读值没有影响!!
    // console.log(event);

    let x = event.nativeEvent.contentOffset.x; //横向偏移量
    let w = event.nativeEvent.layoutMeasurement.width; //每个子视图的宽度

    this.curP = Math.round(x / w);
    console.log(this.curP);
  };

  curP = 0;

  _renderItem = ({item}) => (
    <Image source={{uri: item.img}} style={{width, height: height - 20}} />
  );
}

const styles = StyleSheet.create({});
