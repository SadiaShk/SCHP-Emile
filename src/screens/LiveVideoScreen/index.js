import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import NotificationCard from '../../components/NotificationCard';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableHOC from '../../components/TouchableHOC';
import FriendRequestCard from '../../components/FriendRequestCard';
import PostCard from '../../components/PostCard';


class LiveVideoScreen extends React.Component {
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
    videosItem = ({ item, index }) => {
        return (
            <ImageBackground source={item} style={styles.liveVideoImageView}
                imageStyle={styles.liveVideoImage}
            >
                <View style={styles.blurView1}>
                    <TouchableHOC style={styles.playBtn}>
                        <Image source={icons.playBtn} style={styles.playIcon} />
                    </TouchableHOC>
                </View>

            </ImageBackground>
        )
    }
    render() {

        return (
            <ScrollView style={styles.mainContainer}
            >
                <View style={styles.headerRow}>
                    <TextCircularMedium style={styles.headerTitle}>Live</TextCircularMedium>
                    <Button title="New" style={styles.newBtn}
                        onPress={() => this.props.navigation.navigate("LiveVideoNew")}
                    />
                </View>
                <View style={[styles.screenPadding, styles.sectionContainer]}>
                    <View style={styles.expandedRow}>
                        <TextCircularMedium style={styles.sectionTitle}>People's live</TextCircularMedium>
                        <TouchableHOC>
                            <TextCircularMedium style={styles.seeAllText}>View All</TextCircularMedium>
                        </TouchableHOC>
                    </View>
                    <FlatList horizontal
                        data={this.state.videos}
                        renderItem={this.videosItem} />
                </View>
                {this.state.postData.map((item, index) => {
                    return (
                        <PostCard item={item}
                            cardStyle={1}
                            reactionPress={() => this.reactionPopup.show()}
                            onOptionPress={() => this.postOptionsPopup.show()}
                        />
                    )
                })}
            </ScrollView>

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

export default connect(mapStates, mapProps)(LiveVideoScreen)