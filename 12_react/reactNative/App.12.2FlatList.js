// rnc
import React, {Component} from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  // 网络请求的数据是变化的
  state = {result: [], refreshing: false};

  // 保存当前页
  page = 1;

  url = 'https://api.apiopen.top/getWangYiNews?count=20&page=';

  componentDidMount() {
    let url = this.url + 1;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="red" />
        <Text style={ss.nav}>网易新闻</Text>
        {/* 
        onEndReached: 触底时触发的方法
        onEndReachedThreshold: 触底触发的阈值, 默认值0.5 代表50%; 未出现的UI 高度 是整个可见列表区域 的 50% 高度时 触发 onEndReached

        refreshing: 当前下拉刷新的动画是否呈现
        onRefresh: 下拉刷新触发的方法
         */}
        <FlatList
          data={this.state.result}
          renderItem={this._renderItem}
          style={{marginBottom: rpx(90)}}
          keyExtractor={(item, index) => index + ''}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: 'gray', height: 1}} />
          )}
          ListFooterComponent={this._ListFooterComponent}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }

  _onRefresh = () => {
    // alert('下拉刷新');

    this.setState({refreshing: true});

    let url = this.url + 1; //刷新就是第一页

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({result: res.result, refreshing: false});

        this.page = 1; //重置当前页
      });
  };

  _onEndReached = () => {
    // alert('触底!');
    //获取下一页数据
    let nextPage = this.page + 1;
    let url = this.url + nextPage;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // 把返回的数据 添加到之前的数组中
        this.setState({result: this.state.result.concat(res.result)});
        // 请求成功, 更新页数
        this.page = nextPage;
      });
  };

  _ListFooterComponent = () => (
    <View
      style={{
        backgroundColor: 'rgb(240,240,240)',
        alignItems: 'center',
        paddingVertical: rpx(6),
      }}>
      <ActivityIndicator color="red" size="large" />
      <Text style={{fontSize: rpx(23)}}>加载中, 请稍后...</Text>
    </View>
  );

  _renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: rpx(140) * 1.4,
          height: rpx(88) * 1.4,
          margin: rpx(10),
          borderRadius: rpx(5),
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Text style={{fontSize: rpx(28)}}>{item.title}</Text>
        <Text style={{fontSize: rpx(23), color: 'gray'}}>{item.passtime}</Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  nav: {
    fontSize: rpx(40),
    backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
    paddingVertical: rpx(20),
  },
});
