// rnc

import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default class App extends Component {
  names = [
    '亮亮',
    '然然',
    '东东',
    '花花',
    '小新',
    '小李',
    '凯凯',
    '燕子',
    '小月',
    '雨神',
  ];

  render() {
    /**
     * FlatList属于一个智能列表组件:
     *
     * 用户只需要告知 有哪些数据要进行展示, 每条数据什么样
     * FlatList就会自动把每一条数据展现出来.
     */

    /**
     * 重要属性:
     * data: 用于传入 要显示的数据数组
     * renderItem: 数组中的每一项的样子
     * ItemSeparatorComponent: 栏目的分割组件
     * keyExtractor: 循环生成的每一个项目必须有唯一标识 key
     * ListHeaderComponent: 表头
     * ListFooterComponent: 表尾
     */
    return (
      <FlatList
        data={this.names}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        // keyExtractor={this._keyExtractor}
        // keyExtractor={(item, index) => { return index + ''; }}
        keyExtractor={(item, index) => index + ''}
        ListHeaderComponent={this._ListHeaderComponent}
        ListFooterComponent={this._ListFooterComponent}
      />
    );
  }

  _ListFooterComponent = () => (
    <View style={{alignItems: 'center', backgroundColor: 'lightgray'}}>
      <ActivityIndicator color="red" size="large" />
      <Text style={{fontSize: 30}}>加载中...</Text>
    </View>
  );

  // ()=>{ return xxx; }  -> ()=>( xxx )
  _ListHeaderComponent = () => (
    <Text
      style={{
        fontSize: 50,
        textAlign: 'center',
        backgroundColor: 'green',
        color: 'white',
      }}>
      达内WEB讲师
    </Text>
  );

  _keyExtractor = (item, index) => {
    // 返回值必须是字符串
    console.log(item, index);
    return index + '';
  };

  _ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: 'black'}} />
  );

  // 带有_ 开头: 预定俗称的规矩-- 用于绑定事件的函数, 命名时加_开头;  其他人阅读代码时 从外表就能看出此方法是 绑定事件的.
  // 本质上是循环遍历data属性的数组, 类似于  this.names.forEach(obj=>{ renderItem(obj) })

  // 语法糖: () =>{ return xxx; }  函数体中只有一行代码进行返回, 则简化 () => xxx
  _renderItem = ({item}) => (
    // let {item} = obj; //let item = obj.item
    // console.log(obj);
    // 正常使用:
    // let item = obj.item;
    // let index = obj.index;
    // 糖: 糖->甜的->外国人喜欢吃->吃了觉得幸福
    // 语法糖: 特殊规定一些简化写法, 让书写代码时能偷懒:  懒 -> 幸福
    // let {item} = {index: 0, item: '东东'};
    // 相当于
    // let item = {index: 0, item: '东东'}.item;
    <Text style={{fontSize: 120}}>{item}</Text>
  );
}
