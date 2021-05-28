import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordRecovery from '../screens/PasswordRecovery';
import HomeScreen from '../screens/HomeScreen';
import HomeTabNavigator from './HomeTabNavigator';
import LiveVideoNew from '../screens/LiveVideoNew';
import LiveViewVideo from '../screens/LiveViewVideo';
import ChatScreen from '../screens/ChatScreen';
import MyProfile from '../screens/MyProfile';
import EditProfile from '../screens/EditProfile';
import FriendProfile from '../screens/FriendProfile';
import SearchScreen from '../screens/SearchScreen';
import GroupChatScreen from '../screens/GroupChatScreen';


const RootStack = createStackNavigator();
const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={getOptions}
            headerMode="screen">


            <RootStack.Screen
                name="HomeTabNavigator"
                component={HomeTabNavigator}
            />

            <RootStack.Screen
                name="LiveVideoNew"
                component={LiveVideoNew}
                options={{ headerShown: false }}
            />

            <RootStack.Screen
                name="LiveViewVideo"
                component={LiveViewVideo}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="MyProfile"
                component={MyProfile}
            />
            <RootStack.Screen
                name="FriendProfile"
                component={FriendProfile}
            />
            <RootStack.Screen
                name="SearchScreen"
                component={SearchScreen}
            />
            <RootStack.Screen
                name="ChatScreen"
                component={ChatScreen}
            />
            <RootStack.Screen
                name="GroupChatScreen"
                component={GroupChatScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackNavigator;
