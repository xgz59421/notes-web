// 自定义按钮

//rnc
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  qq =
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1166789872,2936558270&fm=26&gp=0.jpg';

  qqq =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603124926231&di=10b88ce8c7b5dd89cc964f9c752ef9bc&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F20%2F04%2F20%2F165717072c88de7.jpg';

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: 'red',
            marginTop: 40,
            borderRadius: 6,
            // Vertical: 竖向, 上下
            paddingVertical: 6, //margin-top:6; margin-bottom:6;
            // Horizontal: 横向, 左右
            paddingHorizontal: 80, //margin-left:6; margin-right:6;
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>登录</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{borderWidth: 1, borderRadius: 80, overflow: 'hidden'}}>
          <Image source={{uri: this.qq}} style={{width: 160, height: 160}} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'skyblue',
            padding: 10,
            borderRadius: 60,
            width: 300,
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: this.qqq}}
            style={{width: 40, height: 40, position: 'absolute', left: 30}}
          />
          <Text style={{color: 'white', fontSize: 24}}>QQ登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
