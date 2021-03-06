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
import TextCircularMedium from '../../components/TextCircularMedium'

import TextCircularBook from '../../components/TextCircularBook'
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
                    <Button title={this.props.btnText ? this.props.btnText : "No"}
                        style={[styles.nobutton]} labelStyle={styles.btnLabelNo}
                        onPress={() => this.dismissPopup()} />
                    <Button title={this.props.btnText ? this.props.btnText : "Yes"}
                        style={[styles.yesbutton]} labelStyle={styles.btnLabel}
                        onPress={() => this.hide2()} />

                </View>
            )
        }
        else if (this.props.onPressBtn1) {
            return <Button title={this.props.btnText ? this.props.btnText : "OK"}
                style={[styles.okBtn]} labelStyle={styles.btnLabel} onPress={() => this.hidePopup()} />

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
                        <Image source={icons.redCross2} style={styles.crossIcon} />
                    </TouchableHOC>
                    {this.props.icon ? <Image source={this.props.icon ? this.props.icon : icons.checkCircle2} style={styles.check} /> : null}

                    {this.props.titleText ? <View style={styles.titleBox}><TextCircularMedium style={styles.title}>{this.props.titleText}</TextCircularMedium>
                    </View> : null}
                    <TextCircularBook style={styles.paymentText} numberOfLines={0}>{this.props.description}</TextCircularBook>

                    {this.renderBtns()}
                    <Image source={icons.basketBall} style={styles.basketBall} />

                </View>
            </Modal>


        )
    }
}
