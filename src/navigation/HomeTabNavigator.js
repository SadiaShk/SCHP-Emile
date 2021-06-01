import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeStackNavigator from './HomeNavigator';
import TabBarButton from '../components/TabBarButton';
import styles from './styles'
import AuthStackNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordRecovery from '../screens/PasswordRecovery';
import NotificationScreen from '../screens/NotificationScreen';
import LiveVideoScreen from '../screens/LiveVideoScreen';
import FriendRequestListing from '../screens/FriendRequestListing';
import CustomTabBar from '../components/CustomTabBar';
import GroupChatScreen from '../screens/GroupChatScreen';
const HomeTabs = createMaterialTopTabNavigator();

const HomeTabNavigator = (props) => {

    return (

        <HomeTabs.Navigator
            tabBarPosition='top'

            tabBar={props => <CustomTabBar {...props} />}

        >

            <HomeTabs.Screen
                name="HomeStackNavigator"

                component={HomeStackNavigator}

            />
            <HomeTabs.Screen
                name="FriendRequestListing"
                component={FriendRequestListing}

            />
            <HomeTabs.Screen


                name="LiveVideoScreen"
                component={LiveVideoScreen}

            />
            <HomeTabs.Screen
                name="NotificationScreen"

                component={NotificationScreen}

            />

        </HomeTabs.Navigator>

    );
}
export default HomeTabNavigator;
