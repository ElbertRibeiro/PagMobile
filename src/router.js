// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, createStackNavigator } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Main from './page1.js';
import Profile from './page2.js';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Main />
            <Profile />
        </NavigationContainer>
    );
};
export default Routes;
