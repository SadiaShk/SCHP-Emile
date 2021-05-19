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


class SignupScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenType: 0

        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    renderScreen = () => {
        switch (this.state.screenType) {
            case 1:
                return (
                    <View style={styles.screenPadding}>
                        <View>
                            <TextCircularBold style={styles.welcomeText}>{"Welcome To SCHP"}</TextCircularBold>
                            <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore </TextCircularBook>
                        </View>
                        <MainInput placeholder="Enter Your Highest Level of Education"
                            style={styles.inputField} />
                        <MainInput placeholder="Tell Us Where You Work"
                            style={styles.inputField}
                        />
                        <MainInput placeholder="Enter Your Favorite Color"
                            style={styles.inputField}
                        />
                        <MainInput placeholder="Enter Your Favorite Food"
                            style={styles.inputField}
                        />
                        <MainInput placeholder="Enter Your Favorite Song"
                            style={styles.inputField}
                        />
                        <MainInput placeholder="Enter Your Favorite Book"
                            style={styles.inputField}
                        />
                        <Button title="Finish" style={styles.signinBtn}
                            onPress={() => {
                                this.setState({ screenType: 0 })
                                this.props.navigation.navigate("SigninScreen")
                            }}
                        />

                    </View>
                )

                break;

            default:
                return (
                    <View style={styles.screenPadding}>
                        <View>
                            <TextCircularBold style={styles.welcomeText}>{"Create New Account"}</TextCircularBold>
                            <TextCircularBook style={styles.sloganText} numberOfLines={0}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore </TextCircularBook>
                        </View>
                        <MainInput placeholder="Enter Name*" style={styles.inputField} />
                        <MainInput placeholder="Enter Email*"
                            style={styles.inputField}
                            keyboardType="email-address"
                        />
                        <MainInput placeholder="Enter Phone*"
                            style={styles.inputField}
                            keyboardType="number-pad"
                        />
                        <MainInput placeholder="Enter Password*"
                            style={styles.inputField}
                            secureTextEntry
                        />
                        <MainInput placeholder="Confirm Password*"
                            style={styles.inputField}
                            secureTextEntry

                        />

                        <Button title="Sign Up" style={styles.signinBtn}
                            onPress={() => this.setState({ screenType: 1 })}
                        />
                        <View style={styles.signupRow}>
                            <TextCircularBook style={styles.accountText}>Already have an account? </TextCircularBook>
                            <TouchableHOC onPress={() => this.props.navigation.navigate("SigninScreen")}>
                                <TextCircularBook style={[styles.accountSignupText, styles.accountText]}>Sign In</TextCircularBook></TouchableHOC>
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
                <Image source={icons.bgShape} style={styles.shapeImage} />
                <Image source={sampleImages.peopleBanner} style={styles.peopleBanner} />
                {this.renderScreen()}
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

export default connect(mapStates, mapProps)(SignupScreen)