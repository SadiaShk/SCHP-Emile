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
import TouchableHOC from '../../components/TouchableHOC'
import ReactionsList from '../../sections/ReactionsList'
const Tab = createMaterialTopTabNavigator();
export default class ViewReactionPopup extends React.Component {
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

            <Modal onRequestClose={this.dismissPopup} visible={true} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    <View style={styles.headerRow}>
                        <View style={styles.row}>
                            <TouchableHOC style={styles.backBtn}>
                                <Image source={icons.backArrow} style={styles.backIcon} />
                            </TouchableHOC>
                            <TextCircularMedium style={styles.popupTitle}>People who reacted</TextCircularMedium>
                        </View>
                        <TouchableHOC >
                            <Image source={icons.searchIcon} style={styles.backIcon} />
                        </TouchableHOC>
                    </View>
                    <Tab.Navigator swipeEnabled={true} tabBarPosition="top"
                        tabBarOptions={{
                            tabStyle: styles.requestTab,
                            style: styles.tabView,
                            iconStyle: styles.tabIcon,
                            showIcon: false,
                            scrollEnabled: true,
                            activeTintColor: "#FFF",
                            inactiveTintColor: "#FFF",
                            showLabel: true,
                            indicatorStyle: styles.indicatorStyle,
                            indicatorContainerStyle: styles.indicatorContainerStyle,
                        }}>


                        <Tab.Screen
                            name="Pending"
                            options={{
                                tabBarLabel: (params) => {
                                    return (
                                        <View style={styles.titleBtn}>
                                            <TextCircularMedium style={styles.titleText}>All 3.5K</TextCircularMedium>
                                        </View>
                                    )
                                },
                            }}
                            component={ReactionsList}
                            initialParams={{ type: "Pending" }}

                        />
                        <Tab.Screen
                            name="In Process"
                            options={{
                                tabBarLabel: (params) => {
                                    return (
                                        <View style={styles.titleBtn}>
                                            <Image source={icons.likeBlueIcon} style={styles.likeReactIcon} />
                                            <TextCircularMedium style={styles.titleText}>950</TextCircularMedium>
                                        </View>
                                    )
                                },
                            }}
                            component={ReactionsList}
                            initialParams={{ type: "In Process" }}

                        />
                        <Tab.Screen
                            name="Completed"
                            options={{
                                tabBarLabel: (params) => {
                                    return (
                                        <View style={styles.titleBtn}>
                                            <Image source={icons.heartIcon} style={styles.likeReactIcon} />
                                            <TextCircularMedium style={styles.titleText}>623</TextCircularMedium>
                                        </View>
                                    )
                                },
                            }}
                            component={ReactionsList}
                            initialParams={{ type: "Completed" }}
                        />
                        <Tab.Screen
                            name="Cancelled"
                            options={{
                                tabBarLabel: (params) => {
                                    return (
                                        <View style={styles.titleBtn}>
                                            <Image source={icons.laughIcon} style={styles.likeReactIcon} />
                                            <TextCircularMedium style={styles.titleText}>323</TextCircularMedium>
                                        </View>

                                    )
                                },
                            }}
                            component={ReactionsList}
                            initialParams={{ type: "Cancelled" }}

                        />
                    </Tab.Navigator>
                    {/* <ScrollView style={styles.reactionTitleRow}>
                        <View style={styles.titleBtn}>
                            <TextCircularMedium style={styles.titleText}>All 3.5K</TextCircularMedium>
                        </View>
                        <View style={styles.titleBtn}>
                            <Image source={icons.likeBlueIcon} style={styles.likeReactIcon} />
                            <TextCircularMedium style={styles.titleText}>950</TextCircularMedium>
                        </View>
                        <View style={styles.titleBtn}>
                            <Image source={icons.heartIcon} style={styles.likeReactIcon} />
                            <TextCircularMedium style={styles.titleText}>623</TextCircularMedium>
                        </View>
                        <View style={styles.titleBtn}>
                            <Image source={icons.laughIcon} style={styles.likeReactIcon} />
                            <TextCircularMedium style={styles.titleText}>323</TextCircularMedium>
                        </View>
                    </ScrollView> */}
                </View>
            </Modal>


        )
    }
}
