import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import MyImage from './MyImage';

export default class MyHTML2NG extends React.Component {

  render(){
    // 异步获取的属性值, 第一次渲染是值为undefined
    console.log("myslids render", this.props.html); 
    if(this.props.html){
      // 已经异步获取到数据
      url_base = 'http://101.96.128.94:9999/';
      let list = this.props.html.match(/img\/\S+\.jpg/g)
      return (
        <View>
          {
            list.map((e,i)=>{
              return <MyImage key={i} uri={url_base + e}/>
            })
          }
        </View>
      )
    }else{
      return (
        <View>
          <Text>内容加载中</Text>
        </View>
      )
    }
  }
}

let ss = StyleSheet.create({

})