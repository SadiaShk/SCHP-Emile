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


class FriendRequestListing extends React.Component {
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
            <FriendRequestCard cardStyle={this.state.selectedTitle == "Suggestions" ? 1 :
                this.state.selectedTitle == "My Contacts" ? 2 :
                    null} item />
        )

    }

    renderListing = () => {
        switch (this.state.selectedTitle) {
            case "Suggestions":
                return (
                    <FlatList
                        contentContainerStyle={styles.flatlist}
                        data={this.state.freindListing}
                        renderItem={(item, index) => this.renderListItem(item, index, "Suggestions")} />
                )
                break;
            case "My Contacts":
                return (
                    <FlatList
                        contentContainerStyle={styles.flatlist}

                        data={this.state.freindListing}
                        renderItem={(item, index) => this.renderListItem(item, index, "Suggestions")} />
                )
                break;
            default:
                return (
                    <FlatList
                        contentContainerStyle={styles.flatlist}

                        data={this.state.freindListing}
                        renderItem={(item, index) => this.renderListItem(item, index, "Suggestions")} />
                )
                break;
        }
    }
    render() {

        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerRow}>
                    <Image source={icons.backArrow} style={styles.backArrow} />
                    <TextCircularMedium style={styles.headerTitle}>{this.state.selectedTitle}</TextCircularMedium>
                    {this.state.listingTitle.map((item, index) => {
                        return (
                            this.state.selectedTitle != item ? <TouchableHOC style={styles.titleView}
                                onPress={() => this.setState({ selectedTitle: item })}
                            >
                                <TextCircularBook style={styles.textTitleItem}>{item}</TextCircularBook>
                            </TouchableHOC> : null
                        )
                    })}

                </View>

                {this.renderListing()}
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

export default connect(mapStates, mapProps)(FriendRequestListing)