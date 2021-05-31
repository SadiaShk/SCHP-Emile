import React from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularMedium from '../../components/TextCircularMedium';

import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchableHOC from '../../components/TouchableHOC';
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
                sampleImages.userImage,
                sampleImages.userImage,
                sampleImages.userImage,
                sampleImages.userImage,
                sampleImages.userImage
            ],
            enableAuthentication: false,
            allowFriendToPost: false,
            allowAnyoneMessage: false

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
                    <CheckboxButton desc="Enable Two Step Authenication"
                        isSelected={this.state.enableAuthentication}

                        onPressCheckbox={() => this.setState({ enableAuthentication: !this.state.enableAuthentication })}
                    />
                    <CheckboxButton desc="Allow friends to post on your timeline"
                        isSelected={this.state.allowFriendToPost}

                        onPressCheckbox={() => this.setState({ allowFriendToPost: !this.state.allowFriendToPost })}

                    />
                    <CheckboxButton desc="Allow anyone to send you a message"
                        isSelected={this.state.allowAnyoneMessage}
                        onPressCheckbox={() => this.setState({ allowAnyoneMessage: !this.state.allowAnyoneMessage })}

                    />

                </View>
                <View style={[styles.screenPadding, styles.sectionBorder, styles.infoSection]}>
                    <View style={styles.infoRow}>
                        <Image source={icons.clockWhite} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Joined 2 Feb 2021</TextCircularBook>
                    </View>
                    <TouchableHOC style={styles.infoRow}
                        onPress={() => this.props.navigation.navigate("EditProfileInnerScreens", { type: "myself" })}
                    >
                        <Image source={icons.userAbout} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >About Myself</TextCircularBook>
                    </TouchableHOC>
                    <TouchableHOC style={styles.infoRow}
                        onPress={() => this.props.navigation.navigate("EditProfileInnerScreens", { type: "editPhone" })}

                    >
                        <Image source={icons.phoneWhiteIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Edit Phone</TextCircularBook>
                    </TouchableHOC>
                    <TouchableHOC style={styles.infoRow}
                        onPress={() => this.props.navigation.navigate("EditProfileInnerScreens", { type: "editPass" })}

                    >
                        <Image source={icons.keyIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Edit Password</TextCircularBook>
                    </TouchableHOC>
                    <TouchableHOC style={styles.infoRow} onPress={() => this.props.navigation.navigate("FriendsList")}>
                        <Image source={icons.friendIcon} style={styles.infoIcon} />
                        <TextCircularBook
                            style={styles.infoText}
                            numberOfLines={0}
                        >Friends 507</TextCircularBook>
                    </TouchableHOC>

                </View>
                <View style={styles.friendSection}>
                    {this.state.friends.map((val, index) => {
                        return (
                            <FriendRequestCard cardStyle={3} />

                        )
                    })}
                </View>
                <Button title="View more" style={styles.moreBtn}
                    onPress={() => this.props.navigation.navigate("FriendsList")}
                />
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