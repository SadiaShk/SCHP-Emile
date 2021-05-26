import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBook from '../../components/TextCircularBook';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import NotificationCard from '../../components/NotificationCard';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableHOC from '../../components/TouchableHOC';
import FriendRequestCard from '../../components/FriendRequestCard';
import PostCard from '../../components/PostCard';
import MainInput from '../../components/MainInput';
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
                { name: "Mark Carson", message: "Hello Can you please help me with one thing please help me with one thing?", date: "06/25/2021", time: "9:20 AM", own: true },
                { name: "Mark Carson", message: "How you doing? every thing okay?", date: "06/25/2021", time: "9:20 AM", own: false },
                { name: "Mark Carson", message: "I'm coming to New York next week...", date: "06/25/2021", time: "9:20 AM", own: false },
                { name: "Mark Carson", message: "Thanks Bro?", date: "06/25/2021", time: "9:20 AM", own: true },


            ]
        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }
    renderListItem = ({ item, index, type }) => {

        return (
            <View style={styles.fullWidthRow}>
                <Image source={sampleImages.userImage} style={styles.userImage} />
                <View>
                    <View style={styles.expandedRow}>
                        <TextCircularMedium style={styles.username}>Mark Carson</TextCircularMedium>
                        <TextCircularBook style={styles.dateText}>3 days ago</TextCircularBook>
                    </View>
                    <View style={styles.messageRow}>
                        <TextCircularMedium style={styles.messageText}
                            numberOfLines={2}
                        >Can you please share the abc project
report with me..</TextCircularMedium>
                        <View style={styles.msgCountBox}>
                            <TextCircularBook style={styles.activeMsgCount}>3</TextCircularBook>
                        </View>
                    </View>
                </View>
            </View>
        )

    }

    getMessagesData = () => {
        let messages = [];

        // console.log('this.props.Friends ',this.props.Friends);

        if (this.props.route?.params?.id) {
            if (this.props.Friends.length > 0) {
                let foundFriend = this.props.Friends.find(
                    (friend) => friend.id == this.props.route?.params?.id,
                );

                if (foundFriend) {
                    messages = [...foundFriend.messages];
                }
            }
        }

        return [...messages];
    };
    _renderItem = ({ item, index }) => {
        item['own'] = item.fromid == this.props.chatId;

        item.image = !item.own ? this.props.route?.params?.image : null;

        return (
            <View style={[{ alignItems: item.own ? 'flex-end' : 'flex-start' }]}>
                <View
                    style={[
                        styles.cheatHead,
                        { justifyContent: item.own ? 'flex-end' : 'flex-start' },
                    ]}>
                    {item.image ? (
                        <TouchableHOC
                            onPress={() => this.props.navigation.navigate('Profile', { item })}>
                            <ImageBackground
                                source={sampleImages.userImage}
                                style={styles.userImage}
                                resizeMode="stretch">
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
                            style={[styles.message, { color: item.own ? 'white' : '#050E37' }]}
                            numberOfLines={0}>
                            {item.content}
                        </TextCircularBook>
                    </View>
                </View>
                {item.infoText && item.own && this.state.isOwner == false ? (
                    <TextCircularBook style={[styles.infoText, { color: '#A4A7B6' }]}>
                        Replied by Assistant
                    </TextCircularBook>
                ) : null}
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
                        <TouchableHOC onPress={() => { }}>
                            <Image source={icons.videoCamera} style={styles.chatHeaderIcon} />
                        </TouchableHOC>
                        <TouchableHOC onPress={() => { }}>
                            <Image source={icons.phoneIcon} style={styles.chatHeaderIcon} />
                        </TouchableHOC>
                        <TouchableHOC onPress={() => { }}>
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
                        enabled={Platform.OS == 'ios' ? true : false}
                        behavior="padding"
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 13.5 * vh : 4.4 * vh}>
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