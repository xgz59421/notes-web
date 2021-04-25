import React from 'react';
import { Dimensions, Image } from 'react-native';

// 把原本宽高各异的图片,统一为:
// 宽度为屏幕宽度, 高度与原图等比缩放
// 假设屏幕宽度为500 , 
// 原图100*50  => 500 * 250
export default class MyImage extends React.Component {
  constructor(){
    super();
    this.state = {
      displayWidth: Dimensions.get('window').width - 10,  //图片显示的宽度
      displayHeight: 0  //图片显示的高度
    }
  }
  componentDidMount(){
    // 组件挂载后, 获取图片原始尺寸,从而获取 要显示的高度
    // console.log(this.props);
    Image.getSize(this.props.uri, (w, h)=>{
      let displayWidth = this.state.displayWidth;
      let displayHeight = displayWidth * h / w;
      this.setState({displayHeight})
    })
  }
  render(){
    return(
      <Image style={{width: this.state.displayWidth, height:this.state.displayHeight}}
            source={{uri: this.props.uri}}
            />
    )
  }
}