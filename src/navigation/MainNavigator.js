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
