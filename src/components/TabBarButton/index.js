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

class TabBarButton extends React.Component {

    render() {
        var imageSource = null;
        var title = null;
        var titleColor = this.props.params.focused ? theme.colors.primaryColor : theme.colors.lightGrey;
        var activeBg = this.props.params.focused ? "rgba(80,3,173,0.1)" : "transparent";
        var focused = this.props.params.focused;
        switch (this.props.name) {
            case 'Home': {
                imageSource = tabIcons.homeIcon
                title = "Home"
                break
            }
            case 'Users': {
                imageSource = tabIcons.usersIcon
                title = "Users"
                break
            }
            case 'Play': {
                imageSource = tabIcons.playIcon
                title = "Play"
                break
            }
            case 'Notification': {
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
            <View
                style={[styles.tabButtonContainer,]}
            >

                <Image
                    style={[styles.tabButtonIcon, { tintColor: focused ? theme.colors.primaryColor : "#333333" }]}
                    source={imageSource}
                    resizeMode="contain" />
                {/* <View style={styles.underline} /> */}
            </View>
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