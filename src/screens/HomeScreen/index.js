import React from 'react'
import { View, FlatList, Image, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import PostCard from '../../components/PostCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ViewReactionPopup from '../../popups/ViewReactionPopup';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
                    isReactionLaugh: true
                },
                {
                    userImage: sampleImages.userImage,
                    name: "ABC Builders",
                    date: "Posted on 10:00 am",
                    content: "Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitom",
                    commentCount: 10,
                    shareCount: 3,
                    images: [
                        sampleImages.postImage3,
                        sampleImages.postImage2,
                        sampleImages.postImage6,
                        sampleImages.postImage4,
                        sampleImages.postImage5

                    ],
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: false,
                    isSponsored: true

                },
                {
                    userImage: sampleImages.userImage,
                    name: "Amelia Isabell",
                    date: "Posted on 10:00 am",
                    content: "",
                    commentCount: "25K",
                    shareCount: 3,
                    images: [
                        sampleImages.postImage1
                    ],
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: false
                },
                {
                    userImage: sampleImages.userImage,
                    name: "Amelia Isabell",
                    date: "Posted on 10:00 am",
                    content: "",
                    commentCount: 10,
                    shareCount: 3,
                    images: [
                        sampleImages.postImage3,
                        sampleImages.postImage2,
                        sampleImages.postImage6,
                        sampleImages.postImage4,
                        sampleImages.postImage5

                    ],
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: false,

                },
                {
                    userImage: sampleImages.userImage,
                    name: "Amelia Isabell",
                    date: "Posted on 10:00 am",
                    content: "",
                    commentCount: "25K",
                    shareCount: 3,
                    images: [
                        sampleImages.postImage7
                    ],
                    reactionCount: 150,
                    isReactionLike: true,
                    isReactionHeart: true,
                    isReactionLaugh: false
                },
            ]

        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    render() {

        return (
            <KeyboardAwareScrollView style={styles.mainContainer}
            >
                <View style={styles.postRow}>
                    <Image source={sampleImages.userImage} style={styles.userImage} />
                    <MainInput placeholder="Share Something?"
                        style={styles.shareInput}
                    />
                </View>
                <ViewReactionPopup
                    ref={(e) => (this.acceptAlert = e)}

                />
                {this.state.postData.map((item, index) => {
                    return (
                        <PostCard item={item} cardStyle={1} />
                    )
                })}


            </KeyboardAwareScrollView>

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

export default connect(mapStates, mapProps)(HomeScreen)