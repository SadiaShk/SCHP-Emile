import React from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TouchableHOC from '../../components/TouchableHOC';


class EditProfileInnerScreens extends React.Component {
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
    renderEditSections = () => {
        switch (this.props.route.params.type) {
            case "myself":
                return (
                    <View>
                        <View style={styles.headerRow}>
                            <View style={styles.row}>
                                <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                                    <Image source={icons.backArrow} style={styles.backArrow} />
                                </TouchableHOC>
                                <TextCircularMedium style={styles.headerTitle}>About Myself</TextCircularMedium>
                            </View>
                            <Button title="Update" style={styles.postBtn} onPress={this.dismissPopup} />
                        </View>
                        <View style={[styles.screenPadding]}>
                            <MainInput
                                label="Highest Level Of Education"
                                placeholder="Enter Education"
                                value={"Education ABC"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="Workplace"
                                placeholder="Enter Workplace"
                                value={"Workplace ABC"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="Favorite Color"
                                placeholder="Enter Favorite Color"
                                value={"Black"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />

                            <MainInput
                                label="Favorite Food"
                                placeholder="Enter Favorite Food"
                                value={"Pizza"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="Favorite Song"
                                placeholder="Enter Favorite Song"
                                value={"Song Abc"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="Favorite Book"
                                placeholder="Enter Favorite Book"
                                value={"Book Abc"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                        </View>
                    </View>

                )
                break;
            case "editPass":
                return (
                    <View>
                        <View style={styles.headerRow}>
                            <View style={styles.row}>
                                <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                                    <Image source={icons.backArrow} style={styles.backArrow} />
                                </TouchableHOC>
                                <TextCircularMedium style={styles.headerTitle}>Edit Password</TextCircularMedium>
                            </View>
                            <Button title="Update" style={styles.postBtn} onPress={this.dismissPopup} />
                        </View>
                        <View style={[styles.screenPadding]}>
                            <MainInput
                                label="Current Password"
                                placeholder="Enter Current Password"
                                secureTextEntry
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="New Password"
                                placeholder="Enter New Password"
                                secureTextEntry
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                            <MainInput
                                label="Confirm Password"
                                placeholder="Enter Confirm Password"
                                secureTextEntry
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />
                        </View>
                    </View>

                )
                break;
            default:
                return (
                    <View>
                        <View style={styles.headerRow}>
                            <View style={styles.row}>
                                <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                                    <Image source={icons.backArrow} style={styles.backArrow} />
                                </TouchableHOC>
                                <TextCircularMedium style={styles.headerTitle}>Edit Phone</TextCircularMedium>
                            </View>
                            <Button title="Update" style={styles.postBtn} onPress={this.dismissPopup} />
                        </View>
                        <View style={[styles.screenPadding]}>
                            <MainInput
                                label="Phone"
                                placeholder="Enter Phone"
                                keyboardType={"number-pad"}
                                style={styles.inputField}
                                labelContainer={styles.inputLabelContainer}
                            />

                        </View>
                    </View>
                )
                break;
        }
    }
    render() {

        return (
            <KeyboardAwareScrollView style={styles.mainContainer}
            >
                {this.renderEditSections()}
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

export default connect(mapStates, mapProps)(EditProfileInnerScreens)