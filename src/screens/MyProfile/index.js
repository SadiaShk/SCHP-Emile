import React from 'react'
import { View, FlatList, Image, ImageBackground, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';

import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import PostCard from '../../components/PostCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ViewReactionPopup from '../../popups/ViewReactionPopup';
import CreatePostPopup from '../../popups/CreatePostPopup';
import TouchableHOC from '../../components/TouchableHOC';
import PostOptionsPopup from '../../popups/PostOptionsPopup';
import PrivacyOptionsPopup from '../../popups/PrivacyOptionsPopup';
import EditPostPopup from '../../popups/EditPostPopup';
import EditPrivacyOptionsPopup from '../../popups/EditPrivacyOptionsPopup';
import ProfilePhotosPopup from '../../popups/ProfilePhotosPopup';


class MyProfile extends React.Component {
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
                <EditPrivacyOptionsPopup
                    ref={(e) => (this.editPrivacyOptionsPopup = e)}
                />
                <EditPostPopup
                    ref={(e) => (this.editPostPopup = e)}
                />
                <ProfilePhotosPopup
                    ref={(e) => (this.profilePhotosPopup = e)}
                    title={"Photos"}
                    onPressMedia={() => this.props.navigation.navigate("ViewPhoto", { mediaType: "image" })}

                />
                <ProfilePhotosPopup
                    ref={(e) => (this.profileVideosPopup = e)}
                    isVideos={true}
                    title={"Videos"}
                    onPressMedia={() => this.props.navigation.navigate("ViewPhoto", { mediaType: "video" })}

                />
                <View style={styles.profileInfo}>
                    <ImageBackground source={sampleImages.profileImage} style={styles.coverImageView}
                        imageStyle={styles.coverImage}
                    >
                        <TouchableHOC style={styles.cameraBtn}>
                            <Image source={icons.liveCamera} style={styles.cameraIcon} />
                        </TouchableHOC>
                    </ImageBackground>
                    <View style={styles.userImageContainer}>
                        <View style={styles.userImageBorder}>
                            <Image source={sampleImages.userImage} style={styles.userProfileImage} />
                        </View>
                        <TouchableHOC style={styles.cameraBtn}>
                            <Image source={icons.liveCamera} style={styles.cameraIcon} />
                        </TouchableHOC>
                    </View>
                    <TextCircularMedium style={styles.userProfileName}>Mark Carson</TextCircularMedium>
                    <View style={styles.infoRow}>
                        <Image source={icons.infoIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Lorem ipsum dolor sit amet, consetetur are it sadipscing elitr, sed diam nonumy eirmod say tempor invidunt.</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.clockWhite} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Joined 2 Feb 2021</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.locationPin} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >From City , Country</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.friendIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Friends 507</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.favBook} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Favorite Book:   Book ABC</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.favMusic} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Favorite Song:   Song Abc</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.favColor} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Favorite Color:   Black</TextCircularBook>
                    </View>
                </View>

                <View style={styles.profileOptionsRow}>
                    <TouchableHOC style={styles.profileOptionsBtn}
                        onPress={() => this.profilePhotosPopup.show()}
                    >
                        <Image source={icons.galleryImageIcon} style={styles.photosIcon} />
                        <TextCircularBook style={styles.optionBtnLabel}>Photos</TextCircularBook>
                    </TouchableHOC>
                    <TouchableHOC style={styles.profileOptionsBtn}
                        onPress={() => this.profileVideosPopup.show()}
                    >
                        <Image source={icons.videoIcon} style={styles.photosIcon} />
                        <TextCircularBook style={styles.optionBtnLabel}>Videos</TextCircularBook>
                    </TouchableHOC>
                    <TouchableHOC style={styles.profileOptionsBtn}
                        onPress={() => this.props.navigation.navigate("FriendsList")}
                    >
                        <Image source={icons.friendIcon} style={styles.photosIcon} />
                        <TextCircularBook style={styles.optionBtnLabel}>Friend</TextCircularBook>
                    </TouchableHOC>
                </View>
                <View style={styles.postRow}>
                    <Image source={sampleImages.userImage} style={styles.userImage} />
                    <TouchableHOC onPress={() => this.createPostPopup.show()}>
                        <MainInput placeholder="Share Something?"
                            style={styles.shareInput}
                        />
                    </TouchableHOC>
                </View>

                {this.state.postData.map((item, index) => {
                    return (
                        <PostCard item={item}
                            reactionPress={() => this.reactionPopup.show()}
                            onOptionPress={() => this.postOptionsPopup.show()}
                            onPressPrivacy={() => this.editPrivacyOptionsPopup.show()}
                        />
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

export default connect(mapStates, mapProps)(MyProfile)