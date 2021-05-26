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

import MaskedViews from '../../components/MaskedViews';
import MaskedElement from '../../components/MaskedElement';
class LiveViewVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [
                sampleImages.postImage1,
                sampleImages.postImage2,
                sampleImages.postImage3,
                sampleImages.postImage4
            ],
            postData: [
                {
                    userImage: sampleImages.userImage,
                    name: "Mark Carson",
                    date: "Posted on 10:00 am",
                    content: "Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.  Proin gravida dolor sitom",
                    commentCount: 10,
                    shareCount: 3,
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: true,
                    videos: [
                        sampleImages.postImage3,

                    ],
                },
                {
                    userImage: sampleImages.userImage,
                    name: "Mark Carson",
                    date: "Posted on 10:00 am",
                    content: "Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.  Proin gravida dolor sitom",
                    commentCount: 10,
                    shareCount: 3,
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: true,
                    videos: [
                        sampleImages.postImage3,

                    ],
                },
                {
                    userImage: sampleImages.userImage,
                    name: "Mark Carson",
                    date: "Posted on 10:00 am",
                    content: "Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.  Proin gravida dolor sitom",
                    commentCount: 10,
                    shareCount: 3,
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: true,
                    videos: [
                        sampleImages.postImage3,

                    ],
                },
                {
                    userImage: sampleImages.userImage,
                    name: "Mark Carson",
                    date: "Posted on 10:00 am",
                    content: "Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.consectetur are it adipiscing elit. Aenean euismod bibendum laoreet.  Proin gravida dolor sitom",
                    commentCount: 10,
                    shareCount: 3,
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: true,
                    videos: [
                        sampleImages.postImage3,

                    ],
                },
            ]


        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }

    render() {

        return (
            <ImageBackground source={sampleImages.liveImage2}
                style={styles.imageBgView} imageStyle={styles.imageBg}>
                <View style={styles.blurView}>
                    <View style={styles.expandedRow}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.arrowImage} />
                        </TouchableHOC>
                        <View style={styles.row}>
                            <View style={styles.liveLabelBox}>
                                <TextCircularMedium style={styles.headerTitle}>Live</TextCircularMedium>
                            </View>
                            <View style={styles.viewLabelBox}>
                                <Image source={icons.openEye} tintColor={theme.colors.white} style={styles.eyeIcon} />
                                <TextCircularMedium style={styles.headerTitle}>30</TextCircularMedium>
                            </View>
                        </View>
                        <View style={styles.headerRightView} />
                    </View>

                </View>
            </ImageBackground>

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

export default connect(mapStates, mapProps)(LiveViewVideo)