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
import DrawerNavigator from './DrawerNavigator';

// import HomeTabNavigator from './HomeTabNavigator';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
            headerMode="none">

            <MainStack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
            />
            <MainStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
            />


        </MainStack.Navigator>
    );
};

class MainNavigator extends React.Component {
    componentDidMount() {

    }


    renderScreenArea = () => {
        return <MainStackNavigator />;
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
