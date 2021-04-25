// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../../../n1web/web17_react/day173/rnApp/pages/NewsScreen';
import DetailScreen from '../../../n1web/web17_react/day173/rnApp/pages/DetailScreen';

import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'red'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 3,
          },
        }}>
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            title: '网易新闻',
          }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: '新闻详情'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
