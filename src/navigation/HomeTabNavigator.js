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
const HomeTabs = createMaterialTopTabNavigator();

const HomeTabNavigator = (props) => {

    return (

        <HomeTabs.Navigator
            tabBarPosition='top'
            lazy={true}
            tabBarOptions={{
                style: styles.tabStyle,
                tabStyle: styles.homeTab,
                iconStyle: styles.tabIcon,
                showIcon: true,
                activeTintColor: theme.colors.fontWhite,
                inactiveTintColor: theme.colors.fontWhite,
                showLabel: false,

                indicatorStyle: styles.indicatorStyle,
                indicatorContainerStyle: styles.indicatorContainerStyle,
            }}
        >

            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Home' />
                        )
                    },
                }}

                name="HomeStackNavigator"
                component={HomeStackNavigator}

            />


            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Users' />
                        )
                    },
                }}

                name="HomeScreen"
                component={HomeScreen}

            />
            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Play' />
                        )
                    },
                }}

                name="LiveVideoScreen"
                component={LiveVideoScreen}

            />
            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Notification' />
                        )
                    },
                }}

                name="NotificationScreen"
                component={NotificationScreen}

            />
            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Setting' />
                        )
                    },
                }}

                name="PasswordRecovery"
                component={PasswordRecovery}

            />
        </HomeTabs.Navigator>

    );
}
export default HomeTabNavigator;
