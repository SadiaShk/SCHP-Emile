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


class LiveVideoNew extends React.Component {
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
            <ImageBackground source={sampleImages.liveImage}
                style={styles.imageBgView} imageStyle={styles.imageBg}>
                <View style={styles.blurView}>
                    <View style={styles.row}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>

                            <Image source={icons.backArrow} style={styles.arrowImage} />
                        </TouchableHOC>
                        <TextCircularMedium style={styles.headerTitle}>Create live</TextCircularMedium>
                    </View>
                    <View style={styles.rowCentered}>
                        <TouchableHOC style={styles.liveBtnView} onPress={() => this.props.navigation.navigate("LiveViewVideo")}>
                            <Image source={icons.liveCamera} style={styles.liveCamera} />
                            <TextCircularBook style={styles.liveText}>Start live</TextCircularBook>
                        </TouchableHOC>
                    </View>
                    <TouchableHOC>
                        <MainInput
                            label="Privacy"
                            placeholder="Select Privacy"
                            style={styles.inputField}
                            editable={false}
                            rightIcon={icons.dropdownIcon}
                        />
                    </TouchableHOC>
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

export default connect(mapStates, mapProps)(LiveVideoNew)