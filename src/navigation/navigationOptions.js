import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import vh from '../utils/units/vh';
import vw from '../utils/units/vw';
import fonts from '../assets/fonts'
import { TransitionPresets } from '@react-navigation/stack';
import styles from './styles';
import { icons } from '../assets/images';
import ExtendedHeader from '../components/ExtendedHeader';
import IconButton from '../components/IconButton';
import TextCircularBold from '../components/TextCircularBold';
import TextCircularBook from '../components/TextCircularBook';

import theme from '../utils/units/theme';

export const defaultOptions = (activeRouteName, props) => {
    return {
        headerStyle: {
            height: 9.8 * vh,
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: theme.colors.darkPurple

        },
        headerRightContainerStyle: {
            paddingRight: 5 * vw,
        },
        headerLeftContainerStyle: {
            paddingLeft: 5 * vw,
            // marginBottom: 3 * vh

        },
        headerRight: () => showRightButton(activeRouteName, props),
        headerLeft: () => showLeftButton(activeRouteName, props),

        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'left',
        headerTitleStyle: {
            fontFamily: fonts.Fonts.RBM,
            color: theme.colors.primaryColor,
            fontSize: 2.05 * vh,

        },

        // headerBackground: () => (
        //     <View style={styles.headerBgContainer}>
        //         <Image style={styles.headerImg}
        //             source={icons.headerBg} />
        //     </View>
        // ),
    };
};



export const showRightButton = (activeRouteName, { navigation, route }) => {
    switch (activeRouteName) {
        case 'PeopleReactedScreen':
        case 'Login':
        case 'Signup':
        case 'Faqs':
        case 'Contact':


            return null
        case 'HomeScreen':
            return (
                <View style={styles.headerRow}>
                    <IconButton onPress={() => { }}
                        style={[styles.headerButtons]} icon={icons.searchIcon}
                        iconStyle={{ marginLeft: -0.4 * vw, tintColor: theme.colors.white }}
                        onPress={() => { }}
                    />
                    <IconButton onPress={() => { }}
                        style={[styles.headerButtons]} icon={icons.chatBubble}
                        iconStyle={{ marginLeft: -0.4 * vw, tintColor: theme.colors.white }}
                        onPress={() => { }}
                    />
                </View>
            )
        default:
            return null
        // <IconButton onPress={() => navigation.navigate("Notification")}
        //     style={[styles.headerButtons]} icon={icons.notification}
        // />

    }
};
export const showLeftButton = (activeRouteName, { navigation, route }) => {
    // console.log('activeRouteName, navigation', activeRouteName, navigation, route);

    switch (activeRouteName) {
        case 'HomeScreen':

            return (<View>
                <TextCircularBold style={styles.titleText}>SCHP
                <TextCircularBold style={[styles.titleText, styles.titleDot]}>.</TextCircularBold>
                </TextCircularBold>
            </View>
            );


    }
    return (
        <IconButton onPress={() => navigation.pop()}
            style={[styles.headerButtons]} icon={icons.backArrow}
            iconStyle={{ marginLeft: -0.4 * vw, }}
        />

    );
};

export const shouldHeaderBeShown = (activeRouteName) => {
    switch (activeRouteName) {
        case 'HomeScreen':
            return true;


        default:
            return false;
    }
};


export const getTitle = (activeRouteName, props) => {
    switch (activeRouteName) {


        default:
            return '';
    }
};

export const getOptions = (props) => {
    console.log("props", props);
    var activeRouteName = props.route.state
        ? props.route.state.routes[props.route.state.index].name
        : props.route.name;
    // console.log('active routename', activeRouteName);
    return {
        ...defaultOptions(activeRouteName, props),
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: shouldHeaderBeShown(activeRouteName),
        title: getTitle(activeRouteName, props),
        ...(activeRouteName == 'Services' || activeRouteName == 'Signup' || activeRouteName == 'Menu'
            || activeRouteName == "MyProfile" || activeRouteName == 'EditProfile' || activeRouteName == "ServiceDetail"
            ? { header: (props) => <ExtendedHeader {...props} /> }
            : null),
        gestureEnabled: false,
    };
};
