import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBook from '../../components/TextCircularBook';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import NotificationCard from '../../components/NotificationCard';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableHOC from '../../components/TouchableHOC';
import FriendRequestCard from '../../components/FriendRequestCard';
import PostCard from '../../components/PostCard';
import MainInput from '../../components/MainInput';
import theme from '../../utils/units/theme';
import ImageEditOptionsPopup from '../../popups/ImageEditOptionsPopup';

import AlertPopup from '../../popups/AlertPopup';

class GroupVideoCall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke",
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke"
            ],

        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }
    renderItem = ({ item, index }) => {

        return (
            <FriendRequestCard cardStyle={5} item={item} />
        )

    }
    renderCallType = () => {
        switch (this.props.route.params.callType) {
            case "groupVideo":
                return (
                    <View style={styles.videoContainer}>
                        <Image source={sampleImages.userImage2} style={styles.userImage} />
                        <Image source={sampleImages.userImage} style={styles.userImage} />
                        <Image source={sampleImages.profileImage} style={styles.userImage} />
                        <Image source={sampleImages.userImage2} style={styles.userImage} />
                        <View style={styles.btnRow}>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.voiceCall} style={styles.playIcon} />
                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={icons.callIcon} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.microPhone} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.videoCamera2} style={styles.playIcon} />

                            </TouchableHOC>
                        </View>
                    </View>
                )
                break;
            case 'video':
                return (
                    <ImageBackground style={styles.videoCallView}
                        imageStyle={styles.videoCallImage}
                        source={sampleImages.userImage2}
                    >
                        <View style={styles.timerView}>
                            <TextCircularMedium style={styles.callerName}>Mark Carson</TextCircularMedium>
                            <TextCircularMedium style={styles.timerText}>10:20</TextCircularMedium>
                        </View>
                        <Image source={sampleImages.userImage} style={styles.callerImage} />
                        <View style={styles.btnRow}>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.voiceCall} style={styles.playIcon} />
                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={icons.callIcon} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.microPhone} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.videoCamera2} style={styles.playIcon} />

                            </TouchableHOC>
                        </View>
                    </ImageBackground>
                )
                break;
            default:
                return (
                    <View style={styles.voiceCallView}
                    >
                        <View style={styles.lighterPurpleBorder}>
                            <View style={styles.lightPurpleBorder}>
                                <Image source={sampleImages.userImage2} style={styles.voiceCallerImage} />
                            </View>
                        </View>
                        <TextCircularMedium style={styles.callerName}>Jennifer Reid</TextCircularMedium>
                        <TextCircularMedium style={styles.timerText}>10:20</TextCircularMedium>

                        <View style={styles.btnRow}>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.voiceCall} style={styles.playIcon} />
                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn} onPress={() => this.props.navigation.goBack()}>
                                <Image source={icons.callIcon} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.microPhone} style={styles.playIcon} />

                            </TouchableHOC>
                            <TouchableHOC style={styles.playBtn}>
                                <Image source={icons.videoCamera2} style={styles.playIcon} />

                            </TouchableHOC>
                        </View>
                    </View>
                )
                break;
        }
    }

    render() {

        return (
            <View style={styles.mainContainer}>
                {this.renderCallType()}
            </View >

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

export default connect(mapStates, mapProps)(GroupVideoCall)