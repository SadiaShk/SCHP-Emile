import React, {

} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { getOptions } from './navigationOptions';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    useIsDrawerOpen
} from '@react-navigation/drawer';
import ChatScreen from '../screens/ChatScreen';
import ChatList from '../screens/ChatList';

import HomeTabNavigator from '../navigation/HomeTabNavigator';
import { icons, sampleImages } from '../assets/images';
import { Text, View, Image } from 'react-native';
import styles from './styles'
import TouchableHOC from '../components/TouchableHOC';
import RobotoRegular from '../components/RobotoRegular';
import RobotoMedium from '../components/RobotoMedium';

const Drawer = createDrawerNavigator();

const Screens = (props) => {
    const { navigation, style, outerStyle } = props

    return (
        <View style={{ flex: 1 }}>
            <HomeTabNavigator navigation={navigation} />
        </View>
    );
};
const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            {...props}
            // scrollEnabled
            contentContainerStyle={styles.DrawerScrollView}>

            <View style={styles.drawerHeaderView}>
                <Image source={sampleImages.userimg} style={styles.userImage} />
                <RobotoMedium style={styles.username}>Mark Carson</RobotoMedium>
                <RobotoMedium style={styles.collegeName}>Coach: St. John High School.</RobotoMedium>
                <View style={styles.statsRow}>
                    <View style={styles.statsBox}>
                        <View style={styles.statsNumberBox}>
                            <RobotoMedium style={styles.statsNumberText}>03</RobotoMedium>
                        </View>
                        <RobotoRegular style={styles.statsLabel}
                            numberOfLines={2}
                        >Favourite Players</RobotoRegular>
                    </View>
                    <View style={styles.statsBox}>
                        <View style={styles.statsNumberBox}>
                            <RobotoMedium style={styles.statsNumberText}>03</RobotoMedium>
                        </View>
                        <RobotoRegular style={styles.statsLabel}
                            numberOfLines={2}
                        >Posts</RobotoRegular>
                    </View>
                    <View style={styles.statsBox}>
                        <View style={styles.statsNumberBox}>
                            <RobotoMedium style={styles.statsNumberText}>03</RobotoMedium>
                        </View>
                        <RobotoRegular style={styles.statsLabel}
                            numberOfLines={2}
                        >Follow Requests</RobotoRegular>
                    </View>
                </View>
            </View>
            <TouchableHOC style={styles.crossIconBtn} onPress={() => {
                props.navigation.closeDrawer()
            }}>
                <Image source={icons.crossIcon} style={styles.closeIcon} />
            </TouchableHOC>
            <View style={styles.optionContainer}>
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>My Profile</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.profileIcon} style={styles.optionImg} />}
                    onPress={() => props.navigation.navigate("ProfileScreen")}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />

                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Players</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.playerIcon} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />

                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Galleries</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.galleryIcon} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Commitments</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.commitment} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Favourite Players</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.profileIcon} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Events</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.calendarIcon} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Referral Link</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.referral} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <RobotoRegular style={styles.optionLabel}>Sign out</RobotoRegular>
                            <Image source={icons.arrowForward} style={styles.optionImg} />
                        </View>)
                    }}

                    icon={() => <Image source={icons.profileIcon} style={styles.optionImg} />}
                    onPress={() => { }}
                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />

            </View>

        </DrawerContentScrollView >
    );
};
const DrawerNavigator = props => {


    return (
        <View
            style={{ flex: 1, backgroundColor: 'white' }}
        >
            {/* <Image source={icons.whiteWatermark} style={styles.watermark} resizeMode="contain" /> */}




            <Drawer.Navigator
                drawerType="front"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                contentContainerStyle={{ flex: 1 }}

                drawerContentOptions={{

                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'transparent',
                    inactiveTintColor: 'transparent',
                }}

                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerContent={(props) => {
                    return <DrawerContent {...props} />;
                }}>
                <Drawer.Screen name="Screens">
                    {(props) => <Screens {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>

    )
}

export default DrawerNavigator;
