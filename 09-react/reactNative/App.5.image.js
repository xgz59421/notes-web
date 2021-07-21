/**
 * 项目启动两种方式
 * 1. 编译环境可用
 *   - cmd中: adb devices
 *   - 开启夜神模拟器/插真机
 *   - cmd中: adb devices
 *   - 项目下: npm run android
 *
 * 2. 编译环境不可用 - ip方式
 *   - apk 和 项目包必须配对
 *   - apk 安装到 模拟器/真机 上
 *   - 项目包启动: npm run start
 *   - 读取电脑ip: ipconfig
 *     -- 测试地址:  ip:8081
 *   - 模拟器上打开项目, 菜单中settings 设置ip:端口号
 *   - 关闭应用重启即可;  服务器卡顿了 则在模拟器上按 回车/r
 */

// rncs
import React, {Component} from 'react';
// 凡是要使用的组件 必须在此处引入之后才能用!
import {Text, StyleSheet, View, Image} from 'react-native';

/**
 * 图片组件:
 * 1. 本地图片
 * 2. 网络图片
 */

export default class App extends Component {
  img =
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603031776130&di=14095852237b3716a88937f17f140221&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408';

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        {/* 
        web中: <img src="" />
        rn中: 采用全写  image   source
         */}

        {/* 固定写法: 网络图片 {uri: 图片地址} */}
        {/* 网络图片必须手动指定宽和高 */}
        <Image source={{uri: this.img}} style={{width: 400, height: 300}} />
        {/* blurRadius: 模糊度 */}
        <Image
          source={{uri: this.img}}
          style={{width: 400, height: 300}}
          blurRadius={5}
        />
        {/* 本地图片: 使用require进行引入; 宽高默认与图片原大小一直 */}
        <Image source={require('./assets/123.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
