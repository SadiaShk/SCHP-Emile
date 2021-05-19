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
import theme from '../utils/units/theme';

export const defaultOptions = (activeRouteName, props) => {
    return {
        headerStyle: {
            height: 9.6 * vh,
            shadowColor: 'transparent',
            elevation: 0,
            backgroundColor: activeRouteName == "PeopleReactedScreen" ||
                activeRouteName == "AcceptedRequests" ||
                activeRouteName == "RequestRecevied" ||
                activeRouteName == "RosterDetail" ||
                activeRouteName == "RequestDetail" ||
                activeRouteName == "FollowRequestList" ||
                activeRouteName == "ChatList" ||
                activeRouteName == "ChatScreen" ||
                activeRouteName == "ChangePassword"
                ? theme.colors.lightOrange : theme.colors.white

        },
        headerRightContainerStyle: {
            paddingRight: 5 * vw,
            marginBottom: 3 * vh
        },
        headerLeftContainerStyle: {
            paddingLeft: 5 * vw,
            marginBottom: 3 * vh

        },
        headerRight: () => showRightButton(activeRouteName, props),
        headerLeft: () => showLeftButton(activeRouteName, props),

        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'left',
        headerTitleStyle: {
            fontFamily: fonts.Fonts.RBM,
            color: theme.colors.primaryColor,
            fontSize: 2.05 * vh,
            marginBottom: 3 * vh

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
        case 'ChatList':
        case 'ChatScreen':
            return <IconButton onPress={() => { }}
                style={[styles.headerButtons]} icon={icons.editIcon}
                iconStyle={{ marginLeft: -0.4 * vw, tintColor: theme.colors.white }}
                onPress={() => navigation.navigate("ChatSearchScreen")}
            />
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
        case 'Home':
        case 'Menu':
        case 'ChatList':

            return null;


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
        case 'PeopleReactedScreen':
            return true;
        case 'AddPost':
            return true;
        case 'EditPost':
            return true
        case 'AcceptedRequests':
            return true
        case 'RequestRecevied':
            return true
        case 'RosterDetail':
            return true
        case 'RequestDetail':
            return true
        case 'FollowRequestList':
            return true
        case 'ChatList':
            return true
        case 'ChatScreen':
            return true
        case 'ChatSearchScreen':
            return true
        case 'ChangePassword':
            return true
        default:
            return false;
    }
};


export const getTitle = (activeRouteName, props) => {
    switch (activeRouteName) {
        case 'PeopleReactedScreen':
            return 'People who reacted';
        case 'AddPost':
            return 'Create Post';
        case 'EditPost':
            return 'Edit Post';
        case 'AcceptedRequests':
            return 'Accepted Requests'
        case 'RequestRecevied':
            return 'Request Recevied'
        case 'RosterDetail':
            return 'Roster Detail'
        case 'RequestDetail':
            return 'Request Detail'
        case 'FollowRequestList':
            return 'Follow Request'
        case 'ChatList':
            return 'Chat'
        case 'ChatScreen':
            return 'Chat'
        case 'ChatSearchScreen':
            return 'New Chat'
        case 'ChangePassword':
            return 'Change Password'
        default:
            return 'TITLE';
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
