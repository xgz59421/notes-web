// rncs
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class App extends Component {
  state = {result: [], refreshing: false};

  url = 'https://api.apiopen.top/getWangYiNews?count=20&page=';
  page = 1;

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

        {/* numColumns: 列数 默认值1 */}
        <FlatList
          data={this.state.result}
          keyExtractor={(item, index) => index + ''}
          renderItem={this._renderItem}
          numColumns={2}
          style={{marginBottom: rpx(90)}}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this._ListFooterComponent}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    let url = this.url + 1;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({result: res.result, refreshing: false});

        this.page = 1;
      });
  };

  _ListFooterComponent = () => (
    <View style={{alignItems: 'center', paddingVertical: rpx(10)}}>
      <ActivityIndicator color="red" size="large" />
      <Text style={{fontSize: rpx(25)}}>加载中, 请稍后...</Text>
    </View>
  );

  _onEndReached = () => {
    let nextPage = this.page + 1;
    let url = this.url + nextPage;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // 数组拼接
        this.setState({result: this.state.result.concat(res.result)});
        this.page = nextPage;
      });
  };

  _renderItem = ({item}) => {
    // 间距: 20px
    let box_w = rpx(750 - 20 * 3) / 2;

    return (
      <View style={{marginLeft: rpx(20), width: box_w, marginTop: rpx(20)}}>
        <Image
          source={{uri: item.image}}
          style={{
            width: box_w,
            height: (88 * box_w) / 140,
            borderRadius: rpx(5),
          }}
        />
        <View style={{padding: rpx(10), backgroundColor: 'rgb(240,240,240)'}}>
          <Text style={{fontSize: rpx(23)}}>{item.title}</Text>
          <Text style={{fontSize: rpx(20), color: 'gray', marginTop: rpx(10)}}>
            {item.passtime}
          </Text>
        </View>
      </View>
    );
  };
}

const ss = StyleSheet.create({
  nav: {
    textAlign: 'center',
    paddingVertical: rpx(20),
    fontSize: rpx(30),
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: rpx(10),
  },
});
