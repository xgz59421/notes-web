import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class ProductsScreen extends Component {
  state = {res: null, refreshing: false};

  // 复用
  url = 'http://101.96.128.94:9999/data/product/list.php?pno=';

  componentDidMount() {
    let url = 'http://101.96.128.94:9999/data/product/list.php?pno=1';

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // { res: res } -> {res}
        this.setState({res});
      });
  }

  render() {
    // this.state.res:
    // 在网络请求前值为null  网络请求结束 才有值; 使用时如果是null 会报错!
    // 通过if判断规避 null 的情况
    if (this.state.res == null) return <View />;

    return (
      <FlatList
        data={this.state.res.data}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        style={{backgroundColor: 'white'}}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'gray'}} />
        )}
        ListFooterComponent={this._ListFooterComponent}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached}
        onRefresh={this._onRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    fetch(this.url + 1)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        this.setState({res, refreshing: false});
      });
  };

  _onEndReached = () => {
    if (this.state.res.pno == this.state.res.pageCount) return;
    //下一页
    let nextP = this.state.res.pno + 1;
    fetch(this.url + nextP)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        res.data = this.state.res.data.concat(res.data);
        this.setState({res});
      });
  };

  _ListFooterComponent = () => {
    // 如果最后一页, 则显示 没有更多数据
    if (this.state.res.pno == this.state.res.pageCount) {
      return (
        <Text
          style={{
            textAlign: 'center',
            paddingVertical: rpx(10),
            fontSize: rpx(30),
            backgroundColor: 'lightgray',
          }}>
          没有更多数据
        </Text>
      );
    }

    return (
      <View style={{alignItems: 'center', paddingVertical: rpx(10)}}>
        <ActivityIndicator color="blue" size="large" />
        <Text style={{fontSize: rpx(25)}}>加载中...</Text>
      </View>
    );
  };

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => this.props.navigation.push('Detail', {lid: item.lid})}>
        <Image
          source={{uri: 'http://101.96.128.94:9999/' + item.pic}}
          style={{width: rpx(200), height: rpx(200)}}
        />
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: rpx(25)}}>{item.title}</Text>
          <Text style={{color: 'red', fontSize: rpx(26)}}>￥{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({});
