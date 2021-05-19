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


class SigninScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    render() {

        return (
            <KeyboardAwareScrollView style={styles.mainContainer}
            >
                <Image source={icons.bgShape} style={styles.shapeImage} />
                <Image source={sampleImages.peopleBanner} style={styles.peopleBanner} />
                <View style={styles.screenPadding}>
                    <View>
                        <TextCircularBold style={styles.welcomeText}>{"Welcome Back"}</TextCircularBold>
                        <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore </TextCircularBook>
                    </View>
                    <MainInput placeholder="Enter Email*"
                        style={styles.inputField}
                        keyboardType="email-address"
                    />
                    <MainInput placeholder="Enter Password*"
                        secureTextEntry
                        style={styles.inputField} />
                    <View style={styles.forgotRow}>
                        <TouchableHOC onPress={() => this.props.navigation.navigate("PasswordRecovery")}>
                            <TextCircularBook style={styles.forgotText}>Forgot Password?</TextCircularBook>
                        </TouchableHOC>
                    </View>
                    <Button title="Sign In" style={styles.signinBtn} />
                    <View style={styles.signupRow}>
                        <TextCircularBook style={styles.accountText}>Don't have an account? </TextCircularBook>
                        <TouchableHOC onPress={() => this.props.navigation.navigate("SignupScreen")}>
                            <TextCircularBook style={[styles.accountSignupText, styles.accountText]}>Sign Up</TextCircularBook></TouchableHOC>
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

export default connect(mapStates, mapProps)(SigninScreen)