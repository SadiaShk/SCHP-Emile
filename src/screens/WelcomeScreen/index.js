import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularBook from '../../components/TextCircularBook';
import Button from '../../components/Button';
import TouchableHOC from '../../components/TouchableHOC';


class WelcomeScreen extends React.Component {
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
            <View style={styles.mainContainer}
            >
                <Image source={icons.bgShape} style={styles.shapeImage} />
                <View style={styles.titleRow}>
                    <TextCircularBold style={styles.titleText}>SCHP<TextCircularBold style={[styles.titleText, styles.titleDot]}>.</TextCircularBold></TextCircularBold>
                    <TouchableHOC onPress={() => this.props.navigation.navigate("SignupScreen")}><TextCircularBook style={styles.signupText}>Sign Up</TextCircularBook>
                    </TouchableHOC>
                </View>

                <Image source={sampleImages.peopleBanner} style={styles.peopleBanner} />
                <View style={styles.screenPadding}>
                    <View>
                        <TextCircularBold numberOfLines={0} style={styles.getStartedText}>{"Let's Get\nStarted"}</TextCircularBold>
                        <TextCircularBook style={styles.sloganText}>Everythings works better together</TextCircularBook>
                    </View>
                    <Button title="Login"
                        onPress={() => this.props.navigation.navigate("SigninScreen")}
                    />
                </View>
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

export default connect(mapStates, mapProps)(WelcomeScreen)