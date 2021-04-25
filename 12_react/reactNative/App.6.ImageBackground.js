// rnc

import React, {Component} from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';

export default class App extends Component {
  img =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603032442830&di=906a5a72649b8d73817cbc449f8ae5ec&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201405%2F10%2F094204lmn0mrrns80lv6u0.jpg';

  render() {
    return (
      <View>
        <StatusBar backgroundColor="rgba(0,0,0,0)" translucent />

        {/* 背景图要求 必须给宽高 */}
        <ImageBackground
          source={{uri: this.img}}
          style={{width: '100%', height: '100%'}}>
          <Text
            style={{
              fontSize: 50,
              color: 'white',
              alignSelf: 'center',
              marginTop: 100,
            }}>
            凯哥666
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
