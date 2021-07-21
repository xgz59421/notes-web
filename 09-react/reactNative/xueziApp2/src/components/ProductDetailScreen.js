import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import MyHTML2NG from './MyHTML2NG';
import MySlides from './MySlides';

export default class ProductDetailScreen extends React.Component {
  url_base = 'http://101.96.128.94:9999/';
  constructor(props){
    super();
    this.state = {
      product:{}
    }
  }
  // static navigationOptions = {
  //   title : '商品x的详情'
  // }
  static navigationOptions = ((obj)=>{
    console.log("ProductDetailScreen",obj);
    let navigation = obj.navigation;
    return {
      title: navigation.getParam('lid', 99) + '号商品详情'
    }
  })
  componentDidMount(){
    // console.log(this.props);
    // 方法一:
    // console.log(this.props.navigation.state);
    // 方法二: 如果获取不到lid 则默认第二个参数: 0
    let lid = this.props.navigation.getParam('lid', 0);
    console.log("lid", lid);
    let url = this.url_base + 'data/product/details.php?lid=' + lid;
    fetch(url)
    .then((response) =>{
      return response.json();
    })
    .then((body)=>{
      console.log(body);
      this.setState({
        product:body.details
      })
      console.log(this.state.product);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render(){
    let p = this.state.product;
    return(
    <View style={{flex:1, padding:10}}>
      <ScrollView>
        <Text>产品型号: {p.lname}</Text>
        {/* hr换行 */}
        <View style={ss.hr}></View>
        {/* 自定义轮播图 */}
        <MySlides picList={p.picList}/>
        <Text> {p.title}</Text>
        <Text> {p.subtitle}</Text>
        <Text> {p.price}</Text>
        {/* hr换行 */}
        <View style={ss.hr}></View>
        <MyHTML2NG html={p.details}/>
      </ScrollView>
      <Button  title='删除商品'/>
    </View>

    )
  }
}

let ss = StyleSheet.create({
  hr:{
    borderTopWidth:1, 
    borderTopColor:'#aaa',
    height: 0, 
    marginVertical: 6 ,
  }
})