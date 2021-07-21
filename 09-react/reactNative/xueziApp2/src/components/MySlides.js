import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default class MySlides extends React.Component {
  timer = null; // 轮播图定时器
  constructor(){
    super();
    this.state = {
      curIndex: 0   // 轮播图的当前下标
    }
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    // 异步获取的属性值, 第一次渲染是值为undefined
    console.log("myslids render", this.props); 
    // 获取手机屏幕尺寸
    // const dimensions = Dimensions.get('screen');
    // alert(dimensions.width);
    // alert(dimensions.height);
    if(this.props.picList){
      // 已经异步获取到图片
      url_base = 'http://101.96.128.94:9999/';
      // 定时器尚未启动,则启动一次
      if(this.timer === null){
        this.timer = setInterval(() => {
          let curIndex = this.state.curIndex;
          curIndex++;
          if (curIndex == this.props.picList.length) {
            curIndex = 0;
          }
          this.setState({
            curIndex
          })
        }, 2000);
      }
      return (
        <View>
          <Image style={ss.fullWidth} 
              source={{uri: url_base + this.props.picList[this.state.curIndex].md}}/>
        </View>
      )
    }else{
      return (
        <View>
          <Image style={ss.fullWidth} source={require('../assets/loading.jpg')}/>
        </View>
      )
    }
  }
}

let ss = StyleSheet.create({
  fullWidth:{
    width: Dimensions.get('window').width -10,
    height:Dimensions.get('window').width -10
  }
})