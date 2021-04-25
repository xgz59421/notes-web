// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  state = {data: [], refreshing: false};

  // 分页接口有不同的策略
  // 1. 页数方式    xxx?page=1&count=6   --服务器负责页数逻辑
  // 2. 偏移量方式  xxx?limit=20&offset=偏移量   limit代表数量 offset代表从序号几开始读取
  url = 'http://capi.douyucdn.cn/api/v1/live?limit=20&offset=';

  componentDidMount() {
    let url = 'http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({data: res.data});
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index + ''}
        numColumns={2}
        renderItem={this._renderItem}
        onEndReached={this._onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this._ListFooterComponent}
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}
      />
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    let url = this.url + 0;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({data: res.data, refreshing: false});
      });
  };

  _ListFooterComponent = () => (
    <View style={{paddingVertical: rpx(10), alignItems: 'center'}}>
      <ActivityIndicator color="blue" size="large" />
      <Text style={{fontSize: rpx(30), color: 'gray'}}>加载中...</Text>
    </View>
  );

  _onEndReached = () => {
    // 偏移量: 就是当前已有元素数量
    let url = this.url + this.state.data.length;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({data: this.state.data.concat(res.data)});
      });
  };

  _renderItem = ({item}) => {
    //
    let online = item.online;

    if (online >= 10000) {
      online /= 10000;
      online = online.toFixed(1);
      online += '万';
    }

    // 图片比例 320:180

    // 间隔10px
    let box_w = rpx(750 - 10 * 3) / 2;
    return (
      <View
        style={{
          width: box_w,
          marginLeft: rpx(10),
          marginTop: rpx(10),
          backgroundColor: 'rgb(240,240,240)',
        }}>
        <View>
          <Image
            source={{uri: item.room_src}}
            style={{width: box_w, height: (180 * box_w) / 320}}
          />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: rpx(5),
            }}>
            <Text style={{color: 'white'}}>{item.nickname}</Text>
            <Text style={{color: 'white'}}>{online}</Text>
          </View>
        </View>
        <Text style={{margin: rpx(10)}}>{item.room_name}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({});
