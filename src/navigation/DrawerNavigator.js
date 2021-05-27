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

import HomeTabNavigator from '../navigation/HomeTabNavigator';
import { icons, sampleImages } from '../assets/images';
import { Text, View, Image } from 'react-native';
import styles from './styles'
import TouchableHOC from '../components/TouchableHOC';
import TextCircularBook from '../components/TextCircularBook';
import TextCircularMedium from '../components/TextCircularMedium';
import RootStackNavigator from './RootNavigator';

const Drawer = createDrawerNavigator();

const Screens = (props) => {
    const { navigation, style, outerStyle } = props

    return (
        <View style={{ flex: 1 }}>
            <RootStackNavigator navigation={navigation} />
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
                <View style={styles.userImageBorder}>
                    <Image source={sampleImages.userImage} style={styles.userImage} />
                </View>
                <TouchableHOC onPress={() => props.navigation.navigate("MyProfile")} style={{ marginTop: 1 * vh }}>
                    <TextCircularMedium style={styles.username}>Mark Carson</TextCircularMedium>
                </TouchableHOC>
                <TouchableHOC style={{ marginTop: 0.5 * vh }}
                    onPress={() => props.navigation.navigate("EditProfile")}
                >
                    <TextCircularBook style={styles.editProfileTitle}>Edit Profile</TextCircularBook>
                </TouchableHOC>

            </View>
            <TouchableHOC style={styles.crossIconBtn} onPress={() => {
                props.navigation.closeDrawer()
            }}>
                <Image source={icons.crossIconWhite} style={styles.closeIcon} />
            </TouchableHOC>
            <View style={styles.optionContainer}>
                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <TextCircularBook style={styles.optionLabel}>Contact Us</TextCircularBook>
                        </View>)
                    }}

                    icon={() => <Image source={icons.contactIcon} style={styles.optionImg} />}
                    onPress={() => props.navigation.navigate("ContactUs")}

                    style={styles.option}
                    labelStyle={styles.optionLabel}
                />

                <DrawerItem
                    label={() => {
                        return (<View style={styles.labelBox}>
                            <TextCircularBook style={styles.optionLabel}>Logout</TextCircularBook>
                        </View>)
                    }}

                    icon={() => <Image source={icons.logoutIcon} style={styles.optionImg} />}
                    onPress={() => props.navigation.navigate("AuthStackNavigator")}
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
