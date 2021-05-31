import React from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from './styles'
import { banners, icons } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import TouchableHOC from '../../components/TouchableHOC';
import MainInput from '../../components/MainInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class ContactUs extends React.Component {
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
            <KeyboardAwareScrollView style={styles.mainContainer}>
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.backArrow} />
                        </TouchableHOC>

                        <TextCircularMedium style={styles.headerTitle}>Contact Us</TextCircularMedium>
                    </View>

                </View >
                <View style={styles.screenPadding}>
                    <MainInput
                        label="Name"
                        placeholder="Enter Name"
                        style={styles.inputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <MainInput
                        label="Email"
                        placeholder="Enter Email"
                        keyboardType={"email-address"}
                        style={styles.inputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <MainInput
                        label="Subject"
                        placeholder="Enter Subject"
                        style={styles.inputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <MainInput
                        label="Message"
                        placeholder="Enter Message"
                        multiline
                        style={styles.messageInputField}
                        labelContainer={styles.inputLabelContainer}
                    />
                    <Button title="Send" style={styles.sendBtn} />
                </View>
            </KeyboardAwareScrollView >

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

export default connect(mapStates, mapProps)(ContactUs)