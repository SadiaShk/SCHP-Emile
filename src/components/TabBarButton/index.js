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
            case 'Request': {
                imageSource = tabIcons.requestIcon
                title = "REQUESTS"
                break
            }
            case 'Chat': {
                imageSource = tabIcons.chatIcon
                title = "CHAT"
                break
            }
            case 'Roster': {
                imageSource = tabIcons.rosterIcon
                title = "ROSTERS"
                break
            }
        }


        return (
            <View
                style={[styles.tabButtonContainer,]}
            >
                {focused ?
                    <LinearGradient colors={['rgba(255,139,67,1)', 'rgba(225,97,18,1)']} style={[styles.bannerGradient]}>

                        <Image
                            style={[styles.tabButtonIcon, { tintColor: focused ? "#FFF" : "#BFB8B5" }]}
                            source={imageSource}
                            resizeMode="contain" />
                        <TextCircularBold style={[styles.tabTitle, { color: focused ? "#FFF" : "#BFB8B5" }]}>{title}</TextCircularBold>
                    </LinearGradient>

                    :
                    <>
                        <Image
                            style={[styles.tabButtonIcon, { tintColor: focused ? "#FFF" : "#BFB8B5" }]}
                            source={imageSource}
                            resizeMode="contain" />
                        <TextCircularBold style={[styles.tabTitle, { color: focused ? "#FFF" : "#BFB8B5" }]}>{title}</TextCircularBold>
                    </>
                }

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