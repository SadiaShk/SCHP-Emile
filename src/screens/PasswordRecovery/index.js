import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import MainInput from '../../components/MainInput';
import TouchableHOC from '../../components/TouchableHOC';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class PasswordRecovery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            screenStep: 0
        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    renderSteps = () => {
        switch (this.state.screenStep) {
            case 1:
                return (
                    <View>
                        <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                            Please Enter Verification Code Sent To Your Email & Phone Number.
                        </TextCircularBook>
                        <MainInput placeholder="Enter Verification Code* "
                            style={styles.inputField}
                        />
                        <View style={styles.forgotRow}>
                            <TouchableHOC onPress={() => { }}>
                                <TextCircularBook style={styles.forgotText}>Resend Code</TextCircularBook>
                            </TouchableHOC>
                        </View>
                        <Button title="Continue" style={styles.signinBtn}
                            onPress={() => this.setState({ screenStep: 2 })}
                        />
                    </View>
                )
                break;

            case 2:
                return (
                    <View>
                        <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                            Please Enter New Password & Confirm Password
                        </TextCircularBook>
                        <MainInput placeholder="Enter Password*"
                            style={styles.inputField}
                            secureTextEntry
                        />
                        <MainInput placeholder="Confirm Password*"
                            style={styles.inputField}
                            secureTextEntry
                        />
                        <Button title="Update" style={styles.signinBtn}
                            onPress={() => {
                                this.setState({ screenStep: 0 })
                                this.props.navigation.navigate("SigninScreen")
                            }}
                        />
                    </View>
                )
                break;

            default:
                return (
                    <View>
                        <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                            Please Enter Your Email Address To Receieve Verification</TextCircularBook>
                        <MainInput placeholder="Enter Email or Phone*"
                            style={styles.inputField}
                            keyboardType="email-address"
                        />

                        <Button title="Continue" style={styles.signinBtn}
                            onPress={() => this.setState({ screenStep: 1 })}
                        />
                    </View>
                )
                break;
        }
    }
    render() {

        return (
            <KeyboardAwareScrollView style={styles.mainContainer}
            >
                <Image source={icons.bgShape} style={styles.shapeImage} />
                <Image source={sampleImages.peopleBanner} style={styles.peopleBanner} />
                <View style={styles.screenPadding}>
                    <TextCircularBold style={styles.welcomeText}>{"Forgot Password"}</TextCircularBold>

                    {this.renderSteps()}
                    <View style={styles.loginRow}>
                        <TouchableHOC style={styles.signupRow} onPress={() => this.props.navigation.navigate("SigninScreen")}>
                            <Image source={icons.backArrow} style={styles.backBtn} />
                            <TextCircularBook style={styles.accountText}>Back To Login</TextCircularBook>
                        </TouchableHOC>
                    </View>

                </View>
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

export default connect(mapStates, mapProps)(PasswordRecovery)