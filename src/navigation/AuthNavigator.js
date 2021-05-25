import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import WelcomeScreen from '../screens/WelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordRecovery from '../screens/PasswordRecovery';
import HomeScreen from '../screens/HomeScreen';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
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
