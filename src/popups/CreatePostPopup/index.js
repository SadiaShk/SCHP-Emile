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

export default class CreatePostPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            visible: false,
            cardNumber: "",
            expiry: "",
            postStyle: 0,
            edit: false,
            showVideoOptions: false,
            images: [
                sampleImages.postImage3,
                sampleImages.postImage2,
                sampleImages.postImage6,
                sampleImages.postImage4,
                sampleImages.postImage5

            ],
            videoOptions: [
                "15 seconds",
                "30 seconds",
                "Unlimited"
            ],
            postText: "Lorem ipsum dolor sit amet, consetetur are it adipiscing elit. Aenean euismod bibendum laoreet. Proin",
            postOption: [
                { option: "Private", image: icons.privateIcon },
                { option: "Public", image: icons.publicIcon },
                { option: "My Friends", image: icons.friendIcon }
            ],
            showPrivacy: false,
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
    renderEditPost = () => {
        return (
            <View style={styles.editPostView}>

            </View>
        )
    }
    renderCreatePost = () => {
        switch (this.state.postStyle) {
            case 1:
                return (
                    <View style={styles.postInputView}>
                        <MainInput placeholder="Share Something."
                            style={styles.inputView}
                            fieldStyle={styles.inputFieldStyle}
                            multiline
                            onChangeText={(t) => {
                                this.setState((p) => {
                                    return { ...p, postText: t };
                                });
                            }}
                            value={this.state.postText}
                        />
                        <View style={styles.imageContainer}>
                            <Image source={sampleImages.postImage8} style={styles.postImageAdd} />
                            <TouchableHOC style={styles.closeBtn}>
                                <Image source={icons.crossIconWhite} style={styles.crossIcon} />
                            </TouchableHOC>
                        </View>
                    </View>
                )
                break;
            case 2:
                return (
                    <View style={[styles.postInputView, styles.videoPostView]}>
                        <MainInput placeholder="Share Something."
                            style={styles.inputView}
                            fieldStyle={styles.inputFieldStyle}
                            multiline
                            onChangeText={(t) => {
                                this.setState((p) => {
                                    return { ...p, postText: t };
                                });
                            }}
                            value={this.state.postText}

                        />
                        <ImageBackground source={sampleImages.postImage8} style={styles.postImageAdd}
                            imageStyle={styles.postImageView}
                        >
                            <View style={styles.blurView1}>
                                <TouchableHOC style={styles.closeBtn}>
                                    <Image source={icons.crossIconWhite} style={styles.crossIcon} />
                                </TouchableHOC>
                                <TouchableHOC style={styles.playBtn} onPress={() => this.setState({ postStyle: 3 })}>
                                    <Image source={icons.playBtn} style={styles.playIcon} />
                                </TouchableHOC>
                            </View>
                        </ImageBackground>

                    </View>
                )
                break;
            case 3:
                return (
                    <View style={[styles.postInputView, styles.videoPostView]}>
                        <MainInput placeholder="Share Something."
                            style={styles.inputView}
                            fieldStyle={styles.inputFieldStyle}
                            multiline
                            onChangeText={(t) => {
                                this.setState((p) => {
                                    return { ...p, postText: t };
                                });
                            }}
                            value={this.state.postText}

                        />
                        <View style={styles.multipleImagesRow}>
                            {this.state.images.map((val, index) => {
                                return (
                                    index == 4 ?
                                        <ImageBackground source={val}
                                            style={[styles.postImage2,
                                            {
                                                width: index < 2 ? 46 * vw : 30.3 * vw,
                                                height: index < 2 ? 18 * vh : 11 * vh,
                                            }]}
                                            imageStyle={[styles.postImage2,
                                            {
                                                width: index < 2 ? 46 * vw : 30.3 * vw,
                                                height: index < 2 ? 18 * vh : 11 * vh,
                                            }]}
                                        >
                                            <TouchableHOC style={styles.blurView}>
                                                <TextCircularBook style={styles.additionalCount}>+3</TextCircularBook>
                                            </TouchableHOC>

                                        </ImageBackground>
                                        :
                                        index == 0 ?
                                            <ImageBackground source={val}
                                                style={[styles.postImage2,
                                                {
                                                    width: index < 2 ? 46 * vw : 30.3 * vw,
                                                    height: index < 2 ? 18 * vh : 11 * vh,
                                                }]}
                                                imageStyle={[styles.postImage2,
                                                {
                                                    width: index < 2 ? 46 * vw : 30.3 * vw,
                                                    height: index < 2 ? 18 * vh : 11 * vh,
                                                }]}
                                            >
                                                <View style={styles.blurViewVideo}>
                                                    <TouchableHOC style={styles.playBtn}
                                                        onPress={() => this.setState({ postStyle: 2, showVideoOptions: true })}
                                                    >
                                                        <Image source={icons.playBtn} style={styles.playIcon} />
                                                    </TouchableHOC>
                                                </View>

                                            </ImageBackground>
                                            :
                                            <Image source={val} style={[styles.postImage2,
                                            {
                                                width: index < 2 ? 46 * vw : 30.3 * vw,
                                                height: index < 2 ? 18 * vh : 11 * vh,
                                            }]} />
                                )
                            })
                            }
                        </View>
                    </View>
                )
                break;
            default:
                return (
                    <View style={styles.postInputView}>
                        <MainInput placeholder="Share Something."
                            style={styles.inputView}
                            fieldStyle={styles.inputFieldStyle}
                            multiline
                            onChangeText={(t) => {
                                this.setState((p) => {
                                    return { ...p, postText: t };
                                });
                            }}
                            value={this.state.postText}
                        />
                    </View>
                )
                break;
        }
    }
    renderPost = () => {
        return (
            <View style={{ flex: 1, paddingBottom: 8 * vh }}>
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC style={styles.backBtn} onPress={this.dismissPopup}>
                            <Image source={icons.backArrow} style={styles.backIcon} />
                        </TouchableHOC>
                        <TextCircularMedium style={styles.popupTitle}>Create Post</TextCircularMedium>
                    </View>
                    <Button title="Post" style={styles.postBtn} onPress={this.dismissPopup} />
                </View>
                <View style={styles.addPostImageRow}>
                    <TextCircularBook style={styles.addPostTitle}>Add to your post</TextCircularBook>
                    <View style={styles.row}>
                        <TouchableHOC style={styles.galleryBtn} onPress={() => this.setState({ postStyle: 1 })}>
                            <Image source={icons.galleryIcon} style={styles.galleryIcon} />
                        </TouchableHOC>
                        <TouchableHOC style={styles.galleryBtn} onPress={() => this.setState({ postStyle: 2 })}>
                            <Image source={icons.videoCamIcon} style={styles.galleryIcon} />
                        </TouchableHOC>
                    </View>
                </View>
                <View style={[styles.row, styles.screenPadding]}>
                    <Image source={sampleImages.userImage} style={styles.userImage} />
                    <View>
                        <TextCircularMedium style={styles.username}>Mark Carson</TextCircularMedium>
                        <TouchableHOC style={styles.privacyStatusBox}
                            onPress={() => this.setState({ showPrivacy: true })}
                        >
                            <Image source={icons.sponsoredIcon} style={styles.privacyIcon} />
                            <TextCircularBook style={styles.privacyText}>Public</TextCircularBook>
                            <Image source={icons.dropdownIcon} style={styles.dropdownIcon} />

                        </TouchableHOC>
                    </View>
                </View>
                {this.renderCreatePost()}
                {this.state.showVideoOptions ? <View style={styles.videoPopup}>
                    <TextCircularMedium style={styles.videoPopupTitle}>Select Video Length</TextCircularMedium>
                    {this.state.videoOptions.map((val, index) => {
                        return (
                            <TouchableHOC style={[styles.row, styles.videoOption]}
                                onPress={() => this.setState({ showVideoOptions: false })}
                            >
                                <Image source={icons.clockIcon} style={styles.clockIcon} />
                                <TextCircularBook style={styles.optionValue}>{val}</TextCircularBook>
                            </TouchableHOC>
                        )
                    })}



                </View> : null}
            </View>
        )
    }
    privacyOptionsView = () => {
        return (
            <View>
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC style={styles.backBtn} onPress={() => this.setState({ showPrivacy: false })}>
                            <Image source={icons.backArrow} style={styles.backIcon} />
                        </TouchableHOC>
                        <TextCircularMedium style={styles.popupTitle}>Post Privacy</TextCircularMedium>
                    </View>
                    <Button title="Save" style={styles.postBtn} onPress={() => this.setState({ showPrivacy: false })} />
                </View>
                <View style={styles.screenPadding}>
                    <TextCircularMedium style={styles.postPrivacyTitle}>Privacy Setting</TextCircularMedium>
                    {this.state.postOption.map((item, index) => {
                        return (
                            <TouchableHOC style={[styles.row, styles.videoOption]}
                                onPress={() => this.setState({ showPrivacy: false })}
                            >
                                <Image source={item.image} style={styles.clockIcon} />
                                <TextCircularBook style={styles.optionValue}>{item.option}</TextCircularBook>
                            </TouchableHOC>
                        )
                    })}
                </View>
            </View>
        )
    }
    render() {


        return (

            <Modal onRequestClose={this.dismissPopup} visible={this.state.visible} transparent={true} animationType='fade'>
                <TouchableHOC style={styles.modalTouchable} onPress={this.dismissPopup} >

                </TouchableHOC>
                <View style={styles.modalContainer}>
                    {this.state.showPrivacy ?
                        this.privacyOptionsView() :
                        this.renderPost()
                    }
                </View>
            </Modal >


        )
    }
}
