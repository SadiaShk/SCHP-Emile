import React from 'react'
import {
    View, Image
} from 'react-native'
import styles from './styles'

import theme from '../../utils/units/theme'
import { connect } from 'react-redux';
import vw from '../../utils/units/vw'
import { tabIcons } from '../../assets/images'
import TextCircularBold from '../TextCircularBold';
import LinearGradient from 'react-native-linear-gradient';
import TouchableHOC from '../TouchableHOC';

class TabBarButton extends React.Component {

    render() {
        var imageSource = null;
        var title = null;
        // var titleColor = this.props.params.focused ? theme.colors.primaryColor : theme.colors.lightGrey;
        // var activeBg = this.props.params.focused ? "rgba(80,3,173,0.1)" : "transparent";
        var focused = this.props.focused;
        switch (this.props.name) {
            case "HomeStackNavigator": {
                imageSource = tabIcons.homeIcon
                title = "Home"
                break
            }
            case "FriendRequestListing": {
                imageSource = tabIcons.usersIcon
                title = "Users"
                break
            }
            case "LiveVideoScreen": {
                imageSource = tabIcons.playIcon
                title = "Play"
                break
            }
            case "NotificationScreen": {
                imageSource = tabIcons.bellIcon
                title = "Notification"
                break
            }
            case 'Setting': {
                imageSource = tabIcons.settingIcon
                title = "Setting"
                break
            }
        }


        return (
            <TouchableHOC
                style={[styles.tabButtonContainer,]}
                onPress={this.props.onPress}
            >

                <Image
                    style={[styles.tabButtonIcon, { tintColor: focused ? theme.colors.primaryColor : "#333333" }]}
                    source={imageSource}
                    resizeMode="contain" />
                {focused ? <View style={styles.underline} /> : null}
            </TouchableHOC>
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
export default connect(mapStates, mapProps)(TabBarButton)