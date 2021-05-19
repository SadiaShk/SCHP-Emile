import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import Rosters from '../screens/Rosters';
import RosterDetail from '../screens/RosterDetail';
import RequestDetail from '../screens/RequestDetail';
import RequestRecevied from '../screens/RequestRecevied';
import AcceptedRequests from '../screens/AcceptedRequests';
const RosterStack = createStackNavigator();
const RosterStackNavigator = () => {
    return (
        <RosterStack.Navigator screenOptions={getOptions}
            headerMode="screen"
        >
            <RosterStack.Screen
                name="Rosters"
                component={Rosters}
            />

            <RosterStack.Screen
                name="RosterDetail"
                component={RosterDetail}
            />

            <RosterStack.Screen
                name="RequestDetail"
                component={RequestDetail}
            />

            <RosterStack.Screen
                name="RequestRecevied"
                component={RequestRecevied}
            />
            <RosterStack.Screen
                name="AcceptedRequests"
                component={AcceptedRequests}
            />
        </RosterStack.Navigator>
    );
};


export default RosterStackNavigator;
