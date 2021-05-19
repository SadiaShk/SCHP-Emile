import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChangePassword from '../screens/WelcomeScreen';
const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={getOptions}
            headerMode="screen"
        >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
            <HomeStack.Screen
                name="ChangePassword"
                component={ChangePassword}
            />
        </HomeStack.Navigator>
    );
};


export default HomeStackNavigator;
