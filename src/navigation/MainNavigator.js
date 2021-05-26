import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import AuthStackNavigator from './AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import { getOptions } from './navigationOptions';
import LiveVideoNew from '../screens/LiveVideoNew';
import LiveViewVideo from '../screens/LiveViewVideo';
import ChatScreen from '../screens/ChatScreen';

// import HomeTabNavigator from './HomeTabNavigator';

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
                name="ChatScreen"
                component={ChatScreen}
            />
        </RootStack.Navigator>
    );
};

class MainNavigator extends React.Component {
    componentDidMount() {

    }


    renderScreenArea = () => {
        return <RootStackNavigator />;
    };
    render() {
        return (
            <View style={styles.container}>
                {this.renderScreenArea()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default MainNavigator;
