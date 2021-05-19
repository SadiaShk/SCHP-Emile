import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuStackNavigator from './RequestNavigator';
import ChatStackNavigator from './ChatNavigator';
import PackageStackNavigator from './ChatNavigator';
import HomeStackNavigator from './HomeNavigator';
import TabBarButton from '../components/TabBarButton';
import styles from './styles'
import RequestStackNavigator from './RequestNavigator';
import RosterStackNavigator from './RosterNavigator';
const HomeTabs = createBottomTabNavigator();

const HomeTabNavigator = (props) => {

    return (

        <HomeTabs.Navigator
            tabBarPosition='bottom'
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
                            <TabBarButton params={params} name='Request' />
                        )
                    },
                }}

                name="RequestStackNavigator"
                component={RequestStackNavigator}

            />
            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Chat' />
                        )
                    },
                }}

                name="ChatStackNavigator"
                component={ChatStackNavigator}
            />
            <HomeTabs.Screen
                options={{
                    tabBarIcon: (params) => {
                        return (
                            <TabBarButton params={params} name='Roster' />
                        )
                    },
                }}

                name="RosterStackNavigator"
                component={RosterStackNavigator}
            />
        </HomeTabs.Navigator>

    );
}
export default HomeTabNavigator;
