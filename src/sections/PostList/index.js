import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import FriendRequestCard from '../../components/FriendRequestCard';
import PostCard from '../../components/PostCard';
import ViewReactionPopup from '../../popups/ViewReactionPopup';
import CreatePostPopup from '../../popups/CreatePostPopup';
import TouchableHOC from '../../components/TouchableHOC';
import PostOptionsPopup from '../../popups/PostOptionsPopup';
import PrivacyOptionsPopup from '../../popups/PrivacyOptionsPopup';
import EditPostPopup from '../../popups/EditPostPopup';
class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPosts: [
                {
                    userImage: sampleImages.userImage2,
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
                    userImage: sampleImages.userImage2,
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
    renderReactions = ({ item, index }) => {
        return (
            <PostCard item={item}
                postContainer={{ borderTopWidth: index == 0 ? 0 : 1.3 * vh }}
                onPressProfile={() => this.props.navigation.navigate("FriendProfile")}
                reactionPress={() => this.reactionPopup.show()}
                onOptionPress={() => this.postOptionsPopup.show()}
            />)
    }
    renderEmpty = () => {
        return (
            <View style={styles.emptyContainer}>
                <TextCircularMedium style={styles.titleSearch}>No Result found for "abc"</TextCircularMedium>
                <TextCircularMedium style={styles.noResultText}>No Result found</TextCircularMedium>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <ViewReactionPopup
                    ref={(e) => (this.reactionPopup = e)}

                />
                <CreatePostPopup
                    ref={(e) => (this.createPostPopup = e)}

                />
                <PostOptionsPopup
                    ref={(e) => (this.postOptionsPopup = e)}
                    onEditPress={() => this.editPostPopup.show()}
                />
                <PrivacyOptionsPopup
                    ref={(e) => (this.privacyOptionsPopup = e)}
                />
                <EditPostPopup
                    ref={(e) => (this.editPostPopup = e)}
                />
                {this.state.allPosts.length ? <TextCircularMedium style={styles.titleSearch}>Search Result for "abc"</TextCircularMedium>
                    : null}
                <FlatList data={this.state.allPosts} renderItem={this.renderReactions}
                    ListEmptyComponent={() => this.renderEmpty()}
                />
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

export default connect(mapStates, mapProps)(UsersList)