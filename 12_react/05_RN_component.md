## RN 组件
https://www.react-native.cn/docs/components-and-apis
- [1. Text](#1)
- [2. Image](#2)
- [3. ImageBackground, StatusBar(状态栏)](#3)
- [4. Button](#4)
- [5. TouchableOpacity](#5)
- [6. TextInput](#6)
- [7. ScrollView](#7)
- [8. Switch](#8)
- [9. ActivityIndicator](#9)
- [10. Alert](#10)
- [11. Modal](#11)
- [12. WebView & autoheight-webview](#11)
--------
><h2 id='1'>1. Text</h2>
```jsx
// 组件在使用时必须先引才能使用
import React, {Component} from 'react';
import {Text, View} from 'react-native';
// selectable: 长按选中文本
<Text style={{fontSize: 25}} selectable>
  Lorem ipsum dolor sit amet consectetur
</Text>

{/* 与长按冲突: 行数限制 */}
// numberOfLines: 行数
// onPress 点击
<Text numberOfLines={2}  
      onPress={() => alert('疼')}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
</Text>
```
><h2 id='2'>2. Image</h2>
```jsx
// 图片分两种: 本地图 和 网络图
1. 网络图: uri 填写路径
// 网络图默认大小是0,0; 必须手动给宽高才可见
<Image source={{uri: 'http:xxx.png'}} 
       style={{width: 200, height: 200}} />

2. 本地图: 需要存放在assets 文件夹中
// 必须用 require 来引入, 大小为图片本身大小
// blurRadius: 高斯模糊, 数字越大越模糊
<Image blurRadius={9} source={require('./assets/1.jpg')} />
```
><h2 id='3'>3. 背景图与状态栏</h2>
```jsx
import {Dimensions, ImageBackground, StatusBar} from 'react-native';
//获取屏幕的宽和高
const {width, height} = Dimensions.get('screen');
render() {
  return (
    <View>
      {/* barStyle: 文字在 黑/白 变化 */}
      {/* backgroundColor: 背景色 */}
      {/* 沉浸式状态栏: 让状态栏可以被穿透 translucent */}
      {/* transparent: 是透明的意思 */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        // backgroundColor="rgba(0,0,0,0)" translucent
      />
      {/* 背景图 */}
      <ImageBackground
        blurRadius={8}
        style={{width, height}}
        source={require('./assets/1.jpg')}>
        {/* 利用一个空白的 高度和 状态栏一样的 View, 防止内容与状态栏重叠 */}
        {/* StatusBar.currentHeight: 代表状态栏的高度 */}
        <View style={{height: StatusBar.currentHeight}} />
        <Text style={{fontSize: 30, backgroundColor: 'pink'}}>
          textInComponenttextInComponenttextInComponent
        </Text>
      </ImageBackground>
    </View>
  );
}
```
><h2 id='4'>4. Button</h2>
```jsx
{/* 系统按钮不接受样式定制 -- 实际应用很少 */}
<Button title="我是按钮" 
        onPress={() => alert('更疼')} />
```

><h2 id='5'>5. TouchableOpacity</h2>
```jsx
// 自定义按钮

import {Image, Text, TouchableOpacity, View} from 'react-native';
render() {
  return (
    <View>
      {/* TouchableOpacity: 提供了一个点击动画, 渐变效果 */}
      <TouchableOpacity onPress={() => alert('注册!')}>
        <Text style={{fontSize: 30}}>点击注册</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // 点击后的最大透明度, 0~1
        activeOpacity={0.7}
        style={{
          backgroundColor: 'rgb(26, 179, 148)',
          borderRadius: 10,
          alignSelf: 'center',
          width: 300,
          padding: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: 'white', letterSpacing: 15}}>
          登录
        </Text>
      </TouchableOpacity>

      {/* 图片按钮 */}
      <TouchableOpacity>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{uri: 'http:xxx.png',}}
        />
      </TouchableOpacity>
    </View>
  );
}
```
><h2 id='6'>6. TextInput</h2>
```jsx
// 输入框组件
import {Text, TextInput, View} from 'react-native';
export default class App extends Component {
  // 双向绑定, 读取输入框中的值
  state = {uname: '123'};
  render() {
    return (
      <View style={{backgroundColor: 'skyblue', height: '100%'}}>
        <View
          style={{
            margin: 20,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 10,
            // 查: vertical 和 horizontal 的英文含义!
            // vertical:竖向, 相当于padding-top 和 padding-bottom
            paddingVertical: 2,
            // horizontal: 横向. 相当于 padding-left 和 padding-right
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* 默认效果: 输入框的宽度 会随内容而自动变化 */}
          <TextInput
            style={{
              fontSize: 25,
              color: 'orange',
              backgroundColor: 'green',
              // 占据剩余空间大小
              flex: 1,
              marginLeft: 15,
            }}
            placeholder="请输入账号"
            value={this.state.uname}
            // onChangeText={this._unameChange}
            // 可以选择直接把箭头函数写 jsx 中
            onChangeText={uname => this.setState({uname})}
            // 密文: 适合密码,  同 html 的 type='password'
            secureTextEntry
          />
        </View>
        <Text style={{fontSize: 26}}>{this.state.uname}</Text>
      </View>
    );
  }
}
```
><h2 id='7'>7. ScrollView</h2>
```jsx
// 滚动容器
import {ScrollView, Text, View} from 'react-native';
export default class App extends Component {
  show() {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push(<Text style={{fontSize: 30}}>{i}</Text>);
    }
    return arr;
  }
  render() {
    // View: 基础容器, 没有滚动特性
    // ScrollView: 滚动容器
    return <ScrollView>{this.show()}</ScrollView>;
  }
}

```
><h2 id='8'>8. Switch 开关组件</h2>
```jsx
import {Switch, Text, View} from 'react-native';
  state = {isOpen: true};
  <Switch value={this.state.isOpen}
    onValueChange={isOpen => this.setState({isOpen})}/>

```

><h2 id='9'>9. ActivityIndicator</h2>
```jsx
// 活动状态提示
import {ActivityIndicator, Text, View} from 'react-native';
<View style={{alignItems: 'center', backgroundColor: 'lightgray'}}>
  <ActivityIndicator color="green" size="large" />
  <Text style={{fontSize: 25}}>加载中...</Text>
</View>

```
><h2 id='10'>10. Alert</h2>
```jsx
// 提示框
import {Alert, Button, Text, View} from 'react-native';
showMsg() {
  Alert.alert('WARNING', '命运轨迹要开始写BUG了!', [
    {text: '好可怕', onPress: () => alert('好可怕')},
    {text: '隐蔽', onPress: () => alert('快藏起来!')},
  ]);
}
<Button onPress={() => this.showMsg()} title="弹出提示" />
```
><h2 id='11'>11. Modal</h2>
```jsx
// 模态窗口: 弹出一个蒙层
import {Modal} from 'react-native';
const {width, height} = Dimensions.get('screen');
state = {show: false};
render() {
  return (
    <View>
      {/* 模态窗口: 浮在当前页面之上 */}
      {/* visible: 可见性 */}
      {/* animationType: 动画效果 */}
      <Modal visible={this.state.show} animationType="slide">
        <TouchableOpacity
          onPress={() => this.setState({show: false})}
          style={{
            backgroundColor: 'green',
            width,
            height,
          }}>
          <Image
            source={{uri: this.img}}
            style={{width: '100%', height: '100%'}}
          />
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity onPress={() => this.setState({show: true})}>
        <Image source={{uri: this.img}} style={{width: 150, height: 150}} />
      </TouchableOpacity>
    </View>
  );
}

```

><h2 id='12'>12. WebView & autoheight-webview</h2>

```jsx
// 第三方模块: 
npm install react-native-autoheight-webview react-native-webview
// rnc
// 网页
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

//引入
import WebView from 'react-native-webview';
// 自动高度与网页本身一致的组件, 适合网页作为局部出现的需求
import AHWebView from 'react-native-autoheight-webview';

export default class App extends Component {
  data = '<h1 style="color:red;">Hello World!</h1>';

  render() {
    // 1. 通过 uri 加载远程网页
    // return <WebView source={{uri: 'https://www.bilibili.com'}} />;
    //
    // 2. 通过 html 加载本地网页
    // return <WebView source={{html: this.data}} />;
    //
    // 3. 网页作为页面的一部分显示
    return (
      // 网页必须放在 ScrollView 中, 否则有bug
      <ScrollView>
        <Text style={{fontSize: 50}}>1111111111111111111111111111</Text>
        {/* WebView 网页作为页面的一部分, 默认的高度是0 */}
        {/* 使用扩展 autoheight-webview, 高度自动与网页内容一致 */}
        <AHWebView source={{uri: 'https://www.bilibili.com'}} />
        <Text style={{fontSize: 50}}>2222222222222222222222222222</Text>
      </ScrollView>
    );
  }
}

```