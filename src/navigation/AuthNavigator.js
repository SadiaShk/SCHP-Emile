import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordRecovery from '../screens/PasswordRecovery';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={getOptions}>
            <AuthStack.Screen
                name="PasswordRecovery"
                component={PasswordRecovery}
            />
            <AuthStack.Screen
                name="SignupScreen"
                component={SignupScreen}
            />
            <AuthStack.Screen
                name="SigninScreen"
                component={SigninScreen}
            />
            <AuthStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />


        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
