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
import CheckboxButton from '../../components/CheckboxButton';
import FriendRequestCard from '../../components/FriendRequestCard';


class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friends: [
                sampleImages.userImage,
                sampleImages.userImage,
                sampleImages.userImage,
                sampleImages.userImage
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
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.backArrow} />
                        </TouchableHOC>
                        <TextCircularMedium style={styles.headerTitle}>Edit Profile</TextCircularMedium>
                    </View>
                    <Button title="Save" style={styles.postBtn} onPress={this.dismissPopup} />
                </View>
                <View style={[styles.screenPadding, styles.sectionBorder]}>
                    <MainInput
                        label="Name"
                        placeholder="Enter Name"
                        value={"Mark Carson"}
                        style={styles.inputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <MainInput
                        label="About"
                        placeholder="Enter Info"
                        value={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
                        multiline
                        style={styles.messageInputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <MainInput
                        label="From"
                        placeholder="Enter Location"
                        value={"City , Country"}
                        style={styles.inputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <CheckboxButton desc="Enable Two Step Authenication" />
                    <CheckboxButton desc="Allow friends to post on your timeline" />
                    <CheckboxButton desc="Allow anyone to send you a message" />

                </View>
                <View style={[styles.screenPadding, styles.sectionBorder, styles.infoSection]}>
                    <View style={styles.infoRow}>
                        <Image source={icons.clockWhite} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Joined 2 Feb 2021</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.userAbout} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >About Myself</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.phoneWhiteIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Edit Phone</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.keyIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Edit Password</TextCircularBook>
                    </View>
                    <View style={styles.infoRow}>
                        <Image source={icons.friendIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Friends 507</TextCircularBook>
                    </View>

                </View>
                <View style={styles.friendSection}>
                    {this.state.friends.map((val, index) => {
                        return (
                            <FriendRequestCard cardStyle={3} />

                        )
                    })}
                </View>
                <Button title="View more" style={styles.moreBtn} />
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

export default connect(mapStates, mapProps)(EditProfile)