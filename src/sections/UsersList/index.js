import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import FriendRequestCard from '../../components/FriendRequestCard';

const allUsers = [
    { image: sampleImages.userImage, name: "Maria Jay", reaction: icons.likeBlueIcon },
    { image: sampleImages.userImage, name: "Joseph Carter", reaction: icons.heartIcon },
    { image: sampleImages.userImage, name: "Natasha Carson", reaction: icons.heartIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.likeBlueIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.laughIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.laughIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.heartIcon },


]

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        SplashScreen.hide()
    }
    renderReactions = ({ item, index }) => {
        return (
            <FriendRequestCard
                cardStyle={4}
            />)
    }
    renderEmpty = () => {
        return (
            <View style={styles.emptyContainer}>
                <TextCircularMedium style={styles.titleSearch}>No Result found for "abc"</TextCircularMedium>
                <TextCircularMedium style={styles.noResultText}>No Result found</TextCircularMedium>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                {allUsers.length ? <TextCircularMedium style={styles.titleSearch}>Search Result for "abc"</TextCircularMedium>
                    : null}
                <FlatList data={allUsers} renderItem={this.renderReactions}
                    ListEmptyComponent={() => this.renderEmpty()}
                />
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

export default connect(mapStates, mapProps)(UsersList)