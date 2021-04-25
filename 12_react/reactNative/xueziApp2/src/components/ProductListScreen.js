import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class ProductListScreen extends React.Component {
  static navigationOptions = {
    title : '产品列表'
  }
  pno = 0;
  url_base = 'http://101.96.128.94:9999/';
  constructor(){
    super();
    this.state ={
      hasMore: true,
      plist : [],
      imgw : 50,
      imgh : 50
    }
  }
  loadmore(){
    if(this.state.hasMore){
      this.pno++;
      let url = this.url_base + 'data/product/list.php?pno=' + this.pno;
      fetch(url)
      .then((response)=>response.json())
      .then((body)=>{
        console.log(body);
        let plist = this.state.plist;
        plist = plist.concat(body.data)
        if(plist.length == body.recordCount){
          this.setState({hasMore: false});
        }
        this.setState({
          plist
        });
        // console.log(this.state.plist);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
  componentDidMount(){
    this.loadmore();
  }
  jumpToDetail(obj){
    // alert(obj.lid)
    this.props.navigation.navigate('pdetail',obj)
  }

  _renderItem = (obj)=>{
    let item = obj.item
    return  (
      <View style={ss.box}>
        <Image style={{width: 80, height: 80}}  
          source={{uri: this.url_base + item.pic}} />
        <View style={ss.textview}>
          <Text style={ss.title} ellipsizeMode='tail' numberOfLines={1}>{item.title}</Text>
          <Text style={ss.price}>{item.price}</Text>
        </View>
        <View style={ss.btn}>
          <Button  title='查看详情' onPress={()=>{
            this.jumpToDetail({lid:item.lid})
          }}/>
        </View>
      </View>
    )
  }
  _keyExtractor = (item, index )=>{
    return item.lid;
  }
  _ItemSeparatorComponent = ()=>{
    return <View style = {{height:0,marginVertical:10, borderBottomWidth: 1}}></View>
  }
  _onEndReached = ()=>{
    this.loadmore()
  }
  _ListFooterComponent = ()=>{
    if(this.state.hasMore){
      return <ActivityIndicator size={"large"}></ActivityIndicator>
    }else{
      return <Button title='没有更多数据了' disabled />
    }
  }
  render(){
    return(
      <FlatList data={this.state.plist}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent = {this._ItemSeparatorComponent}
        onEndReachedThreshold={0.1}
        onEndReached={this._onEndReached}
        ListFooterComponent = {this._ListFooterComponent}
      ></FlatList>
    )
  }
}

let ss = StyleSheet.create({
  box:{
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  textview:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    
  },
  price:{
    color: '#f00'
  },
  btn:{
    // height: 20
  }
});