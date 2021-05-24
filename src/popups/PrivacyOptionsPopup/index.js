import React from 'react'
import { View, Modal, FlatList, Image, ImageBackground, LayoutAnimation, Touchable, ScrollView } from 'react-native'
import styles from './styles'
import {
    icons,
    banners,
    sampleImages
} from '../../assets/images'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'
import Button from '../../components/Button'

import theme from '../../utils/units/theme'
import TextCircularMedium from '../../components/TextCircularMedium'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TextCircularBold from '../../components/TextCircularBold'
import TextCircularBook from '../../components/TextCircularBook'

import TouchableHOC from '../../components/TouchableHOC'
import ReactionsList from '../../sections/ReactionsList'
import MainInput from '../../components/MainInput'
const Tab = createMaterialTopTabNavigator();

export default class PrivacyOptionsPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: "",
            postOption: [
                { option: "Private", image: icons.privateIcon },
                { option: "Public", image: icons.publicIcon },
                { option: "My Friends", image: icons.friendIcon }
            ],
        }
    }

    show = () => {
        this.setState(p => {
            return {
                ...p,
                visible: true,
            }
        })
    }

    componentDidMount() {

    }
    dismissPopup = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        })

    }

    hidePopup = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onPressBtn1() })

    }
    hide1 = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onSuccess1() })

    }
    hide2 = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onSuccess2() })

    }

    onOptionPress = (value) => {
        switch (value) {
            case "Cancel":
                this.dismissPopup()
                break;

            default:
                this.dismissPopup()

                break;
        }
    }
    render() {


        return (

            <Modal onRequestClose={this.dismissPopup} visible={this.state.visible} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    <View style={styles.headerRow}>
                        <View style={styles.row}>
                            <TouchableHOC style={styles.backBtn} onPress={this.dismissPopup}>
                                <Image source={icons.backArrow} style={styles.backIcon} />
                            </TouchableHOC>
                            <TextCircularMedium style={styles.popupTitle}>Post Privacy</TextCircularMedium>
                        </View>
                        <Button title="Save" style={styles.postBtn} onPress={this.dismissPopup} />
                    </View>
                    <TextCircularMedium style={styles.postPrivacyTitle}>Privacy Setting</TextCircularMedium>
                    {this.state.postOption.map((item, index) => {
                        return (
                            <TouchableHOC style={[styles.row, styles.videoOption]}
                                onPress={() => this.onOptionPress(item.option)}
                            >
                                <Image source={item.image} style={styles.clockIcon} />
                                <TextCircularBook style={styles.optionValue}>{item.option}</TextCircularBook>
                            </TouchableHOC>
                        )
                    })}

                </View>
            </Modal >


        )
    }
}
