import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import HomeScreen from '../screens/HomeScreen';
import ChatListing from '../screens/ChatListing';
import EditProfile from '../screens/EditProfile';
import ContactUs from '../screens/ContactUs';
import CreateChat from '../screens/CreateChat';
import AddParticipant from '../screens/AddParticipant';
import CreateGroup from '../screens/CreateGroup';
import GroupInfoAdmin from '../screens/GroupInfoAdmin';
import FriendsList from '../screens/FriendsList';
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
            <HomeStack.Screen
                name="CreateChat"
                component={CreateChat}
            />
            <HomeStack.Screen
                name="AddParticipant"
                component={AddParticipant}
            />
            <HomeStack.Screen
                name="GroupInfoAdmin"
                component={GroupInfoAdmin}
            />
            <HomeStack.Screen
                name="CreateGroup"
                component={CreateGroup}
            />
            <HomeStack.Screen
                name="FriendsList"
                component={FriendsList}
            />
            <HomeStack.Screen
                name="EditProfile"
                component={EditProfile}
            />
            <HomeStack.Screen
                name="ContactUs"
                component={ContactUs}
            />
        </HomeStack.Navigator>
    );
};


export default HomeStackNavigator;
