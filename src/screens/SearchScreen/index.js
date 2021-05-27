import React from 'react'
import { View, FlatList, Image, ImageBackground, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';

import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import PostCard from '../../components/PostCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ViewReactionPopup from '../../popups/ViewReactionPopup';
import CreatePostPopup from '../../popups/CreatePostPopup';
import TouchableHOC from '../../components/TouchableHOC';
import PostOptionsPopup from '../../popups/PostOptionsPopup';
import PrivacyOptionsPopup from '../../popups/PrivacyOptionsPopup';
import EditPostPopup from '../../popups/EditPostPopup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReactionsList from '../../sections/ReactionsList';
import TabBarButton from '../../components/TabBarButton';
import UsersList from '../../sections/UsersList';
import PostsList from '../../sections/PostList';

const Tab = createMaterialTopTabNavigator();

class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    render() {

        return (
            <KeyboardAwareScrollView style={styles.mainContainer}
                contentContainerStyle={{ flex: 1 }}
            >
                <Tab.Navigator swipeEnabled={true} tabBarPosition="top"
                    tabBarOptions={{
                        tabStyle: styles.requestTab,
                        style: styles.tabView,
                        iconStyle: styles.tabButton,
                        showIcon: true,
                        activeTintColor: "#FFF",
                        inactiveTintColor: "#FFF",
                        showLabel: false,
                        indicatorStyle: styles.indicatorStyle,
                        indicatorContainerStyle: styles.indicatorContainerStyle,
                    }}>
                    <Tab.Screen
                        name="Users"
                        options={{
                            tabBarIcon: (params) => {
                                // console.log("params", params);
                                return (
                                    <View style={styles.tabButton}>
                                        <TextCircularMedium style={styles.tabTitle}>Users</TextCircularMedium>
                                        {params.focused ? <View style={styles.underline} /> : null}
                                    </View>
                                )
                            },
                        }}
                        component={UsersList}

                    />
                    <Tab.Screen
                        name="Posts"
                        options={{
                            tabBarIcon: (params) => {
                                return (
                                    <View style={styles.tabButton}>
                                        <TextCircularMedium style={styles.tabTitle}>Posts</TextCircularMedium>
                                        {params.focused ? <View style={styles.underline} /> : null}
                                    </View>)
                            },
                        }}
                        component={PostsList}

                    />

                </Tab.Navigator>

            </KeyboardAwareScrollView>

        )
    }
}

const mapStates = state => {
    return state
}
const mapProps = dispatch => {
    return {

    }
}

export default connect(mapStates, mapProps)(SearchScreen)