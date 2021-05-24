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

export default class PostOptionsPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: "",
            postOption: [
                { option: "Edit Post", image: icons.editPostIcon2 },
                { option: "Remove post", image: icons.trashIcon },
                { option: "Cancel", image: icons.cancelIcon }
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
            case "Edit Post":
                this.dismissPopup()
                this.props.onEditPress()
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
