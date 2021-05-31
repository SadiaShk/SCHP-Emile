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
import FriendRequestCard from '../../components/FriendRequestCard'
const Tab = createMaterialTopTabNavigator();

export default class SelectedUsersPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: "",
            users: [
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke",
                "Harry Robert",
                "Josephine",
                "Joseph Mak",
                "Oliver Henry",
                "Henry Ford"
            ],
            selectedParticipants: []
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
        }, () => {
            this.props.navigation.navigate("GroupVideoCall", { callType: "groupVideo" })
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
    addItem = (item) => {
        let i = this.state.selectedParticipants.findIndex(x => x === item)
        if (i > -1) {
            var temp = this.state.selectedParticipants
            temp.splice(i, 1);
            this.setState({ selectedParticipants: temp })
        }
        else {
            this.setState({ selectedParticipants: [...this.state.selectedParticipants, item] }) //simple value
        }
    }
    render() {


        return (

            <Modal onRequestClose={this.dismissPopup} visible={this.state.visible} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    <View style={styles.headerRow}>

                        <TextCircularMedium style={styles.popupTitle}>Selected Users</TextCircularMedium>
                        <TouchableHOC style={styles.backBtn} onPress={this.dismissPopup}>
                            <Image source={icons.redCross2} style={styles.backIcon} />
                        </TouchableHOC>
                    </View>
                    <ScrollView style={styles.participantsView}>
                        {this.state.users.map((item, index) => {
                            var selected = false
                            let i = this.state.selectedParticipants.findIndex(x => x === item)
                            if (i > -1) {
                                selected = true
                            }
                            return (
                                <FriendRequestCard cardStyle={6} item={item}
                                    onPress={() => {
                                        this.addItem(item)

                                    }}
                                    cardContainerStyle={{ width: 78 * vw }}
                                    iconCheck={selected ? icons.checkedboxGreen : icons.uncheckboxGray}
                                />

                            )
                        })}
                    </ScrollView>

                    <Button title="Begin Video Call" style={styles.videoCallBtn}
                        onPress={this.dismissPopup}
                    />
                    <TextCircularMedium style={styles.noteText}>Please note that upto 5 users are allowed only in video call</TextCircularMedium>
                </View>
            </Modal >


        )
    }
}
