import 'react-native-gesture-handler';
import React, { createRef, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { icons, sampleImages } from '../assets/images';
import vh from '../utils/units/vh';
import vw from '../utils/units/vw';
import { getOptions } from './navigationOptions';

import MainNavigator from './MainNavigator';

const RootStack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F7F7F7',
  },
};

export default Navigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};
