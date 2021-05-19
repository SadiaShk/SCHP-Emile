import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';
import FollowRequestList from '../screens/FollowRequestList';

const RequestStack = createStackNavigator();
const RequestStackNavigator = () => {
    return (
        <RequestStack.Navigator screenOptions={getOptions}
            headerMode="screen"
        >


            <RequestStack.Screen
                name="FollowRequestList"
                component={FollowRequestList}
            />



        </RequestStack.Navigator>
    );
};

export default RequestStackNavigator;
