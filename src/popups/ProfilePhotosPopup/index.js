import React from 'react'
import { View, Modal, FlatList, Image, ImageBackground, LayoutAnimation, Touchable, ScrollView } from 'react-native'
import styles from './styles'
import {
    icons,
    banners,
    sampleImages
} from '../../assets/images'
import Button from '../../components/Button'

import theme from '../../utils/units/theme'
import TextCircularMedium from '../../components/TextCircularMedium'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextCircularBook from '../../components/TextCircularBook'

import TouchableHOC from '../../components/TouchableHOC'
const Tab = createMaterialTopTabNavigator();

export default class ProfilePhotosPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: "",
            photos: [
                sampleImages.postImage1,
                sampleImages.postImage2,
                sampleImages.postImage3,
                sampleImages.postImage4,
                sampleImages.postImage5,
                sampleImages.postImage6,
                sampleImages.postImage7,
                sampleImages.postImage4,
                sampleImages.postImage5,
                sampleImages.postImage6,
                sampleImages.postImage7,
                sampleImages.postImage4,
                sampleImages.postImage5,
                sampleImages.postImage6,
                sampleImages.postImage7,
            ]
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
    onPressImage = () => {
        this.setState(p => {
            return {
                ...p,
                visible: false
            }
        }, () => { this.props.onPressMedia() })

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
    renderListItem = ({ item, index }) => {
        return (
            <View>
                {index == 0 ?
                    <TouchableHOC style={styles.addImageBg}>
                        <Image source={icons.addPhotoIcon} style={styles.addImageIcon} />
                    </TouchableHOC>
                    :
                    <TouchableHOC onPress={() => this.onPressImage()}>
                        <ImageBackground source={item} style={styles.photosImageView}
                            imageStyle={styles.photosImage}
                        >
                            {this.props.isVideos ? <View style={styles.blurView1}>
                                <View style={styles.playBtn}>
                                    <Image source={icons.playBtn} style={styles.playIcon} />
                                </View>
                            </View> : null}

                        </ImageBackground>
                    </TouchableHOC>
                }
            </View>
        )
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
                            <TextCircularMedium style={styles.popupTitle}>{this.props.title ? this.props.title : "Photos"}</TextCircularMedium>
                        </View>
                        <View style={styles.row}>
                            <TextCircularBook style={styles.filterLabel}>Filter By</TextCircularBook>
                            <TouchableHOC style={styles.filterOptionBtn}>
                                <TextCircularBook style={styles.filterOptionBtnText}>Select</TextCircularBook>
                                <Image source={icons.dropdownIcon} style={styles.dropwdownIcon} />
                            </TouchableHOC>
                        </View>
                    </View>
                    <FlatList
                        style={styles.flatlist}
                        // contentContainerStyle={styles.flatlistContainer}
                        numColumns={3}
                        data={this.state.photos}
                        renderItem={(item, index) => this.renderListItem(item, index)} />
                    <Button title="View more" style={styles.moreBtn}
                        onPress={() => { }}
                    />
                </View>
            </Modal >


        )
    }
}
