import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import MainScreen from './src/components/MainScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import ProductListScreen from './src/components/ProductListScreen';


// 创建路由词典 -- 栈式导航器
let routes = createStackNavigator({
  // 第一个位置为首屏内容
  'main' : MainScreen,
  'plist' : ProductListScreen,
  'login' : LoginScreen,
  'pdetail' : ProductDetailScreen,
});

export default createAppContainer(routes);