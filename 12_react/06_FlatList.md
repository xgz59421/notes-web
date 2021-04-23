
## FlatList
* 下拉刷新 + 加载更多
* 横向滚动
* 多列布局
* 表头, 表尾, 间隔...
```jsx
// rnc
import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
export default class App extends Component {
  emps = [
    {name: '文华', age: 40},
    {name: '亮亮', age: 38},
    {name: '然然', age: 36},
    {name: '东东', age: 35},
    {name: '铭铭', age: 32},
    {name: '小新', age: 33},
    {name: '涛哥', age: 43},
    {name: '凯凯', age: 31},
    {name: '小月', age: 19},
    {name: '梦瑶', age: 18},
  ];

  render() {
    /**
     * 非必备属性:
     * 1. 分割线: ItemSeparatorComponent
     * 2. 表头: ListHeaderComponent
     * 3. 表尾: ListFooterComponent
     */
    return (
      <FlatList
        data={this.emps}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._ItemSeparatorComponent}
        ListHeaderComponent={this._ListHeaderComponent}
        ListFooterComponent={this._ListFooterComponent}
      />
    );
  }

  _ListFooterComponent = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: 'lightgray',
      }}>
      <ActivityIndicator color="green" size="large" />
      <Text style={{fontSize: 25}}>加载中...</Text>
    </View>
  );

  _ListHeaderComponent = () => (
    <View style={{backgroundColor: 'skyblue', padding: 10}}>
      <Text style={{fontSize: 35, color: 'white'}}>WEB教研部</Text>
    </View>
  );

  _ItemSeparatorComponent = () => (
    <View style={{backgroundColor: 'gray', height: 2}} />
  );

  // 注意 带 {} 才能解包
  _renderItem = ({item}) => (
    <View>
      <Text style={{fontSize: 35}}>{item.name}</Text>
      <Text style={{fontSize: 35, color: 'blue'}}>{item.age}</Text>
    </View>
  );
}

```

### 多列布局

```jsx
// rnc

// 多列布局
import React, {Component} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const rpx = x => (width / 750) * x;

export default class App extends Component {
  state = {result: []};

  componentDidMount() {
    const url = 'https://api.apiopen.top/getWangYiNews?page=1';

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);

        this.setState({result: res.result});
      });
  }

  render() {
    /**
     * 3个核心属性:
     * data: 数据项
     * keyExtractor: 每项UI 对应的唯一标识
     * renderItem: 每个数据项对应的UI
     */
    return (
      <FlatList
        data={this.state.result}
        keyExtractor={(item, index) => index + ''}
        renderItem={this._renderItem}
        // numColumns: 列数, 默认1列
        numColumns={2}
      />
    );
  }

  // 箭头函数的语法糖, 只适合 {} 中代码简单的情况;
  _renderItem = ({item}) => {
    const space = rpx(10);
    const box_w = (rpx(750) - 3 * space) / 2;

    return (
      <View style={{width: box_w, marginLeft: space, marginTop: space}}>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: 150}}
        />
        <View>
          <Text style={{fontSize: rpx(30)}} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={{fontSize: rpx(25), color: 'gray'}}>
            {item.passtime}
          </Text>
        </View>
      </View>
    );
  };
}

```


### 横向滚动

```jsx
// rnc
import React, {Component} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const rpx = x => (width / 750) * x;

export default class App extends Component {
  douyu = 'http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0';

  state = {data: []};

  componentDidMount() {
    fetch(this.douyu)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({data: res.data});

        //请求结束时, 添加定时器
        setInterval(() => {
          // 每2.5秒, 让 FlatList 滚动到下一个
          // console.log(this.fl); //debug模式可以看打印, 但是尽量不开. 会导致定时器bug

          // 刷新时, 会有报错; 关闭应用 重新打开即可

          // 超出限制: 当序号为最大值(长度-1) 则变为0  否则+1
          this.current =
            this.current == this.state.data.length - 1 ? 0 : this.current + 1;

          this.fl.current.scrollToIndex({index: this.current});
        }, 2500);
      });
  }

  current = 0; //滚动操作的 当前页序号

  //创建一个变量, 与某个组件绑定
  fl = React.createRef();

  render() {
    return (
      <View>
        <FlatList
          // ref属性 用于绑定 自身 和 某个变量
          ref={this.fl}
          data={this.state.data}
          keyExtractor={(item, index) => index + ''}
          renderItem={this._renderItem}
          // 横向 和 多列是 互斥关系. 不能同时出现
          // numColumns={2}
          // horizontal:横向滚动
          horizontal
          // 按页滚动
          pagingEnabled
          // onScroll: 监听滚动操作的事件
          onScroll={this._onScroll}
        />
      </View>
    );
  }

  _onScroll = event => {
    // React触发的事件参数做过特殊处理: 同步虚拟事件.
    // 要想看打印的值, 必须先调用: event.persist()
    // event.persist();
    // console.log(event);

    // 通过滚动操作中 x 轴的位移, 除以屏幕宽度, 就可以知道移动了几个屏
    const offset_x = event.nativeEvent.contentOffset.x;

    // width: 屏幕宽
    // round: 四舍五入的方式做处理
    const current = Math.round(offset_x / width);
    console.log(current);
    // 滚动操作 实时更新当前页数
    this.current = current;
  };

  _renderItem = ({item}) => {
    const online =
      item.online >= 1e4 ? (item.online / 1e4).toFixed(1) + '万' : item.online;

    return (
      <View style={{width}}>
        <View style={{borderRadius: 5, overflow: 'hidden'}}>
          <Image
            source={{uri: item.room_src}}
            style={{width: '100%', height: width * 0.55}}
          />
          <Text
            style={{
              position: 'absolute',
              right: 0,
              color: 'white',
              padding: 2,
              backgroundColor: 'rgba(0,0,0,0.2)',
              left: 0,
              textAlign: 'right',
            }}>
            {online}
          </Text>
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              bottom: 0,
              padding: 4,
            }}>
            {item.nickname}
          </Text>
        </View>
        <Text
          style={{fontSize: rpx(30), margin: 2, color: 'gray'}}
          numberOfLines={1}>
          {item.room_name}
        </Text>
      </View>
    );
  };
}

```

