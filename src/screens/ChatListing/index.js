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


class ChatListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTitle: "Friend Requests",
            listingTitle: [
                "Friend Requests",
                "Suggestions",
                "My Contacts"
            ],
            freindListing: [
                { image: sampleImages.userImage, name: "Mark Carson" },
                { image: sampleImages.userImage, name: "Natasha" },
                { image: sampleImages.userImage, name: "Jason Joa" },
                { image: sampleImages.userImage, name: "Lisa Ander" },
                { image: sampleImages.userImage, name: "John Doe" },
                { image: sampleImages.userImage, name: "Alison" },

            ]
        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }
    renderListItem = ({ item, index, type }) => {

        return (
            <TouchableHOC style={styles.fullWidthRow}
                onPress={() => this.props.navigation.navigate("ChatScreen")}
            >
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
            </TouchableHOC>
        )

    }


    render() {

        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerRow}>
                    <TextCircularMedium style={styles.headerTitle}>Chats</TextCircularMedium>
                </View>
                <FlatList
                    contentContainerStyle={styles.flatlist}

                    data={this.state.freindListing}
                    renderItem={(item, index) => this.renderListItem(item, index)} />
                <TouchableHOC style={styles.chatBubble}
                    onPress={() => this.props.navigation.navigate("CreateChat")}
                >
                    <Image source={icons.chatBubbleIcon} style={styles.chatIcon} />
                </TouchableHOC>
            </View>

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

export default connect(mapStates, mapProps)(ChatListing)