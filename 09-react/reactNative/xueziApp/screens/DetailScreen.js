import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

const {width, height} = Dimensions.get('screen');

function rpx(p) {
  return (width / 750) * p;
}

export default class DetailScreen extends Component {
  state = {details: null};

  componentDidMount() {
    console.log(this.props);

    let lid = this.props.route.params.lid;

    let url = 'http://101.96.128.94:9999/data/product/details.php?lid=' + lid;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // 把请求回来的 details 进行处理, 添加前缀域名
        // src="img/
        // src="http://101.96.128.94:9999/img/
        res.details.details = res.details.details.replace(
          /src="img/g,
          ' width="100%" src="http://101.96.128.94:9999/img/',
        );

        this.setState({details: res.details});

        this.timer = setInterval(() => {
          let nextP = this.page + 1;

          if (nextP == res.details.picList.length) nextP = 0;

          this.banner.current.scrollToIndex({index: nextP});
        }, 2000);
      });
  }

  // 在页面消失的时候 注销定时器
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // 通过变量操作组件:  固定写法 把变量 绑定给 组件
  banner = React.createRef();

  render() {
    if (this.state.details == null) return <View />;

    let details = this.state.details;

    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
          paddingHorizontal: rpx(20),
          padding: rpx(20),
        }}>
        <Text
          style={{
            borderBottomWidth: 1,
            paddingBottom: rpx(10),
            fontWeight: 'bold',
          }}>
          产品型号: {details.lname}
        </Text>

        <FlatList
          ref={this.banner}
          data={details.picList}
          keyExtractor={(item, index) => index + ''}
          renderItem={this._renderItem}
          horizontal
          pagingEnabled
          onScroll={this._onScroll}
        />

        <Text style={{fontWeight: 'bold', fontSize: rpx(27)}}>
          {details.title}
        </Text>
        <Text
          style={{fontSize: rpx(24), color: 'gray', marginVertical: rpx(10)}}>
          {details.subtitle}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: rpx(30), color: 'red'}}>
          ￥{details.price}
        </Text>
        <View
          style={{height: 2, backgroundColor: 'gray', marginVertical: rpx(10)}}
        />
        {/* 网页内容作为 页面的局部显示 */}
        {/* <AutoHeightWebView source={{html: details.details}} /> */}
        {/* <View style={{height: rpx(20)}} /> */}
      </ScrollView>
    );
  }

  _onScroll = (event) => {
    // 要想打印出实际的值, 必须调用 event.persist()
    // event.persist();
    // console.log(event);

    let x = event.nativeEvent.contentOffset.x;
    let w = event.nativeEvent.layoutMeasurement.width;

    this.page = Math.round(x / w);
    // console.log(this.page);
  };

  page = 0;

  _renderItem = ({item}) => {
    let box_w = rpx(750 - 20 - 20);

    return (
      <Image
        source={{uri: 'http://101.96.128.94:9999/' + item.md}}
        style={{width: box_w, height: box_w}}
      />
    );
  };
}

const styles = StyleSheet.create({});

/**
 * <div class="content_tpl"> <div class="formwork">   <div class="formwork_img"><br></div><div class="formwork_img">    <img alt="" class="" src="img/product/detail/57b15612N81dc489d.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_img">    <img alt="" class="" src="//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg">   </div>  </div>  <div class="formwork">   <div class="formwork_text">    技术规格请前往 www.apple.com/cn/macbook-air/specs.html 查看完整内容。</div></div></div>
 */
