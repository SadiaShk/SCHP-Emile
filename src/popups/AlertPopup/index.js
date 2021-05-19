import React from 'react'
import { View, Modal, FlatList, Image, ImageBackground, LayoutAnimation, Touchable } from 'react-native'
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
import TextRegular from '../../components/TextRegular'
import RobotoMedium from '../../components/RobotoMedium'

import TextCircularBold from '../../components/TextCircularBold'
import TouchableHOC from '../../components/TouchableHOC'
export default class AlertPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: ""

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
    renderBtns = () => {
        if (this.props.onSuccess2) {
            return (
                <View style={styles.btnRow} >
                    <TouchableHOC style={styles.btnView} onPress={() => this.dismissPopup()} >
                        <RobotoMedium style={styles.btnText}>No</RobotoMedium>
                    </TouchableHOC>
                    <TouchableHOC style={styles.btnView} onPress={() => this.hide2()} >
                        <RobotoMedium style={styles.btnText}>Yes</RobotoMedium>
                    </TouchableHOC>
                </View>
            )
        }
        else if (this.props.onPressBtn1) {
            return <Button title={this.props.btnText ? this.props.btnText : "OK"}
                style={[styles.yesbutton]} labelStyle={styles.btnLabel} onPress={() => this.hidePopup()} />

        }
        else if (this.props.dismiss) {
            return <Button title={this.props.btnText ? this.props.btnText : "OK"} style={[styles.yesbutton]} labelStyle={styles.btnLabel} onPress={() => this.dismissPopup()} />

        }
        else {
            return null
        }
    }
    render() {


        return (

            <Modal onRequestClose={this.dismissPopup} visible={this.state.visible} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    <TouchableHOC onPress={this.dismissPopup} style={styles.crossBtn} >
                        <Image source={icons.crossIcon} style={styles.crossIcon} />
                    </TouchableHOC>
                    {this.props.icon ? <Image source={this.props.icon ? this.props.icon : icons.checkCircle2} style={styles.check} /> : null}

                    {this.props.titleText ? <View style={styles.titleBox}><TextCircularBold style={styles.title}>{this.props.titleText}</TextCircularBold>
                        <View style={styles.underline} />
                    </View> : null}
                    <TextCircularBold style={styles.paymentText} numberOfLines={0}>{this.props.description}</TextCircularBold>

                    {this.renderBtns()}
                    <Image source={icons.basketBall} style={styles.basketBall} />

                </View>
            </Modal>


        )
    }
}
