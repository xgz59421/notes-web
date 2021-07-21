安装扩展模块: **栈式导航模块**

```js
// 官网 https://reactnavigation.org/docs/hello-react-navigation
// 中文 https://www.reactnavigation.org.cn/docs/guide-intro 
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
// 栈式导航模块
npm install @react-navigation/stack
```


```jsx
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```


### 导航器

页面跳转: `this.props.navigation.push('页面名', 参数对象)`

路由读值: `this.props.route.params.xxx`