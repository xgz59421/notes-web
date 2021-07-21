// In App.js in a new project
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ProductsScreen from './screens/ProductsScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 首个特殊: 为默认展示的页面 */}
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: '管理员登录'}}
        />

        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{title: '产品列表'}}
        />

        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: '主菜单'}}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: '产品详情'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
