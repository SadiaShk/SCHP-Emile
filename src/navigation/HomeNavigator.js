import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import HomeScreen from '../screens/HomeScreen';
import ChatListing from '../screens/ChatListing';
const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            headerMode="none"
        >
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStack.Screen
                name="ChatListing"
                component={ChatListing}
            />
        </HomeStack.Navigator>
    );
};


export default HomeStackNavigator;
