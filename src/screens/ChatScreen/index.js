import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBook from '../../components/TextCircularBook';
import TextCircularMedium from '../../components/TextCircularMedium';
import TouchableHOC from '../../components/TouchableHOC';
import theme from '../../utils/units/theme';


class ChatScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTitle: "Friend Requests",
            listingTitle: [
                "Friend Requests",
                "Suggestions",
                "My Contacts"
            ],
            chatMessage: [
                { name: "Mark Carson", message: "Lorem ipsum dolor sit amet, consetetur sadipscing", date: "06/25/2021", own: false },
                {
                    name: "Mark Carson", message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                    date: "06/25/2021", time: "Mon at 12:20 pm", own: true
                },
                {
                    name: "Mark Carson", message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
                    date: "06/25/2021", own: false
                },
                {
                    name: "Mark Carson", message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                    date: "06/25/2021", time: "Tue at 10:30 am", own: true
                },
                {
                    name: "Mark Carson", message: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
                    date: "06/25/2021", own: false
                },


            ]
        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }



    _renderItem = ({ item, index }) => {
        item.image = !item.own ? this.props.route?.params?.image : null;

        return (
            <View>
                {item.time ? <TextCircularBook style={styles.timeText}>{item.time}</TextCircularBook> : null}
                <View style={[{ alignItems: item.own ? 'flex-end' : 'flex-start' }]}>
                    <View
                        style={[
                            styles.cheatHead,
                            { justifyContent: item.own ? 'flex-end' : 'flex-start' },
                        ]}>
                        {!item.own ? (
                            <TouchableHOC
                                onPress={() => this.props.navigation.navigate('Profile', { item })}>
                                <ImageBackground
                                    source={sampleImages.userImage}
                                    style={styles.userImage}
                                    imageStyle={styles.userImage}
                                >
                                    <View style={[styles.onlineView]} />
                                </ImageBackground>
                            </TouchableHOC>
                        ) : (
                            <View style={{ marginRight: vw * 13 }} />
                        )}

                        <View
                            style={[
                                { paddingVertical: vh * 0.8 },
                                item.own ? styles.own : styles.other,
                            ]}>
                            <TextCircularBook
                                style={[styles.message, { color: item.own ? 'white' : theme.colors.gray3 }]}
                                numberOfLines={0}>
                                {item.message}
                            </TextCircularBook>
                        </View>
                    </View>

                </View>
            </View>
        );
    };
    render() {

        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.backArrow} />
                        </TouchableHOC>

                        <TextCircularMedium style={styles.headerTitle}>User Name</TextCircularMedium>
                    </View>
                    <View style={styles.row}>
                        <TouchableHOC style={styles.btnIcon} onPress={() => this.props.navigation.navigate("GroupVideoCall", { callType: "video" })}>
                            <Image source={icons.videoCamera} style={styles.chatHeaderIcon} />
                        </TouchableHOC>
                        <TouchableHOC style={styles.btnIcon}
                            onPress={() => this.props.navigation.navigate("GroupVideoCall", { callType: "call" })}
                        >
                            <Image source={icons.phoneIcon} style={styles.chatHeaderIcon} />
                        </TouchableHOC>
                        <TouchableHOC style={styles.btnIcon} onPress={() => { }}>
                            <Image source={icons.threeDotVertical} style={styles.chatHeaderIcon} />
                        </TouchableHOC>
                    </View>
                </View >
                <View style={styles.screenPadding}>

                    <FlatList
                        data={this.state.chatMessage}
                        contentContainerStyle={styles.contentContainer}
                        style={styles.flatlist}
                        inverted={true}
                        renderItem={this._renderItem}
                        bounces={true}
                        bouncesZoom={true}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.16}
                        keyExtractor={(item, index) => String(index)}
                    />
                    <KeyboardAvoidingView
                        style={styles.messageBoxPosition}
                        enabled={Platform.OS == 'ios' ? true : false}
                        behavior="padding"
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 18.5 * vh : 4.4 * vh}>
                        <View style={styles.chatBox}>
                            <TouchableHOC>
                                <Image
                                    source={icons.chatEmo}
                                    style={styles.emoji}
                                    resizeMode="contain"
                                />
                            </TouchableHOC>
                            <TextInput
                                placeholder="Type a message..."
                                selectionColor={theme.colors.white}
                                placeholderTextColor="#CBCBCB"
                                style={styles.input}
                                value={this.state.currentMessage}
                                onChangeText={(t) => this.setState({ currentMessage: t })}
                            />
                            <TouchableHOC >
                                <Image
                                    source={icons.smileIcon}
                                    style={styles.sentImg}
                                    resizeMode="contain"
                                />
                            </TouchableHOC>
                            <TouchableHOC >
                                <Image
                                    source={icons.galleryImageIcon}
                                    style={styles.sentImg}
                                    resizeMode="contain"
                                />
                            </TouchableHOC>
                            <TouchableHOC >
                                <Image
                                    source={icons.sendBtnIcon}
                                    style={styles.sentImg}
                                    resizeMode="contain"
                                />
                            </TouchableHOC>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View >

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

export default connect(mapStates, mapProps)(ChatScreen)