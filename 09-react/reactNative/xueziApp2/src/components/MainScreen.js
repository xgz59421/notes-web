import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = ((obj)=>{
    let navigation = obj.navigation;

    return {
      title: '主菜单',
      headerRight: (
      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Image style={{width: 36, height: 36, borderRadius: 18, marginRight:15}} 
              source={require('../assets/user.png')}/>
      </TouchableOpacity>
    )
    }
  });
  jumpToList = ()=>{
    this.props.navigation.navigate('plist')
  }
  render(){
    return (
    <View >
      {/* 统计信息 */}
      <View >
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text>a111111</Text>
            <Text>312421</Text>
            <Text>a222222</Text>
          </View>
          <View style={ss.col}>
            <Text>b111111</Text>
            <Text>23453</Text>
            <Text>b222222</Text>
          </View>
        </View>
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text>a111111</Text>
            <Text>312421</Text>
            <Text>a222222</Text>
          </View>
          <View style={ss.col}>
            <Text>b111111</Text>
            <Text>23453</Text>
            <Text>b222222</Text>
          </View>
        </View>
        <View style={ss.row}>
          <View style={[ss.col,ss.borderR]}>
            <Text>a111111</Text>
            <Text>312421</Text>
            <Text>a222222</Text>
          </View>
          <View style={ss.col}>
            <Text>b111111</Text>
            <Text>23453</Text>
            <Text>b222222</Text>
          </View>
        </View> 
      
      </View>
      

      {/* 功能菜单 */}
      <View>
        <View style={ss.imgrow}>
          <TouchableOpacity style={ss.imgcol} onPress={this.jumpToList}>
            <Image source={require('../assets/menu_product.jpg')}/>
            <Text>商品管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ss.imgcol}>
            <Image source={require('../assets/menu_user.jpg')}/>
            <Text>用户管理</Text>
          </TouchableOpacity>
        </View>
        <View style={ss.imgrow}>
          <TouchableOpacity style={ss.imgcol}>
            <Image source={require('../assets/menu_order.jpg')}/>
            <Text>订单管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ss.imgcol}>
            <Image source={require('../assets/menu_refresh.jpg')}/>
            <Text>首页管理</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}

let ss = StyleSheet.create({
  row:{
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  col:{
    flex:1,
    alignItems:'center',
    padding: 10
    
  },
  borderR:{
    borderRightWidth:1
  },
  imgrow:{
    flexDirection: 'row',
  },
  imgcol:{
    flex: 1,
    alignItems:'center',
    paddingTop:30
  }
});