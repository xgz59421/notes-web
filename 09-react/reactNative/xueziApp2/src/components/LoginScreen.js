import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title :'管理员登录'
  }
  constructor(){
    super();
    this.state = {
      uname: '',
      upwd: ''
    }
  }
  jumpToMain = ()=>{
    console.log(this.props);
    // {screenProps: undefined, navigation: pop, push, navigate, goback}
    let url = 'http://101.96.128.94:9999/data/user/login.php';
    let body = `uname=${this.state.uname}&upwd=${this.state.upwd}`;

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    }
    // 使用RN提供的 fetch API 发起异步请求
    fetch(url, options)
    .then((response) =>{
      // 等待主体获取完, 解析主体
      console.log(response);
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.code == 200){
        this.props.navigation.navigate('main');
      }else{
        alert(responseJson.msg)
      }
    })
    .catch((error) => {
      console.error(error);
    });

    // this.props.navigation.navigate('main');
  }
  unameChange = (input)=>{
    // console.log(input);
    this.setState({
      uname: input
    })
  }
  upwdChange = (input)=>{
    // console.log(input);
    this.setState({
      upwd: input
    })
  }
  render(){
    return(
      <View style={ss.box}>
        <TextInput value={this.state.uname}  
                onChangeText = {this.unameChange}
                style={ss.input} placeholder='请输入管理员用户名'
                placeholderTextColor='#85939b'/>
        <TextInput value={this.state.upwd}  
                onChangeText = {this.upwdChange}
                style={ss.input} placeholder='请输入用户密码' 
                placeholderTextColor='#85939b'
                secureTextEntry={true}
                />
        <View style={ss.btnbox}>
          <Button  title='登录' onPress={this.jumpToMain}/>
        </View>
        <View style={ss.logobox}>
          <Image resizeMode='contain' source = {require('../assets/logo.png')}/>
          <Text style={ss.logotitle}>后台管理系统</Text>
        </View>
        <Text style={ss.copy}>©2017 版权所有 , CODEBOY.COM</Text>
      </View>
      )
  }
}

let ss = StyleSheet.create({
  box: {
    paddingTop: 50,
    paddingHorizontal: 30

  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: '#85939b',
    color: '#85939b',
    padding : 8,
  },
  btnbox:{
    marginTop: 35
  },
  logobox:{
    marginVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logotitle:{
    fontSize: 30,
    color: '#85939b'
  },
  copy:{
    fontSize: 16,
    color: '#85939b',
    textAlign: 'center'
  }

});