import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/page1';
import Profile from './src/page2.js';

const Stack = createStackNavigator();

const App = () => {
    return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="About" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;