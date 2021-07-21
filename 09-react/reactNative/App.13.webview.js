// rnc

import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

// 网页模块有两种
// react-native-webview : 整个页面是网页时, 使用此模块
// react-native-autoheight-webview : 网页是页面一部分时, 使用此模块
import WebView from 'react-native-webview';
// 自动导入
import AutoHeightWebView from 'react-native-autoheight-webview';

export default class App extends Component {
  // 远程网页
  bili = 'https://www.bilibili.com';

  // 本地的html代码
  html = '<div style="font-size: 80px; color: red">本地网页!!!</div>';

  render() {
    // WebView作为根组件时, 高度默认全屏
    // return <WebView source={{uri: this.bili}} />;
    // return <WebView source={{html: this.html}} />;

    // 非根组件: WebView的高度 会充满父元素剩余的空间高度; 通过style给宽高没用
    return (
      <ScrollView style={{backgroundColor: 'red'}}>
        <Text style={{fontSize: 30}}>123456789</Text>
        {/* <WebView source={{uri: this.bili}} /> */}

        {/* AutoHeightWebView: 必须配合父元素 ScrollView 使用!! 
        高度自动与网页内容一样
        */}

        <AutoHeightWebView source={{uri: this.bili}} />
        <Text style={{fontSize: 30}}>123456789</Text>
      </ScrollView>
    );
  }
}
