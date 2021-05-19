import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import AuthStackNavigator from './AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeTabNavigator from './HomeTabNavigator';

const RootStack = createStackNavigator();
const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            headerMode="none">


            <RootStack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
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
