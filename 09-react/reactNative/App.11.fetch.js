// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

/**
 * React框架: 本身不具备网络请求功能, 需要axios模块协助
 * ReactNative框架: 本身自带网络请求模块: https://reactnative.cn/docs/network
 */

export default class App extends Component {
  state = {result: []};

  // 组件挂载时
  componentDidMount() {
    let url = 'https://api.apiopen.top/getWangYiNews';

    // axios:  axios.get(url).then(res=>{})
    // RN自带的请求模块: fetch(url).then(res=>res.json()).then(res=>{})
    // fetch(url).then((res) => {
    //   console.log(res);
    //   console.log(res.json());
    // });

    // 固定写法
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  // 列表渲染
  showCells() {
    return this.state.result.map((item, index) => {
      return (
        <View key={index} style={{flexDirection: 'row', borderBottomWidth: 1}}>
          <Image
            source={{uri: item.image}}
            style={{width: 140, height: 88, margin: 5}}
          />
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text style={{fontSize: 22}}>{item.title}</Text>
            <Text style={{fontSize: 18}}>{item.passtime}</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{paddingBottom: 60}}>
        <StatusBar backgroundColor="red" />
        <Text style={ss.header}>网易新闻</Text>
        <ScrollView>{this.showCells()}</ScrollView>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    paddingVertical: 10,
    letterSpacing: 5,
  },
});
