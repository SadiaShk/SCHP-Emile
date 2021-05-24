import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';

const allReactions = [
    { image: sampleImages.userImage, name: "Maria Jay", reaction: icons.likeBlueIcon },
    { image: sampleImages.userImage, name: "Joseph Carter", reaction: icons.heartIcon },
    { image: sampleImages.userImage, name: "Natasha Carson", reaction: icons.heartIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.likeBlueIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.laughIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.laughIcon },
    { image: sampleImages.userImage, name: "Oliver James", reaction: icons.heartIcon },


]

class ReactionsList extends React.Component {
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
            <View style={styles.reactionRow} >
                <ImageBackground source={sampleImages.userImage} style={styles.userImageView}
                    imageStyle={styles.userImageView}>
                    <Image source={
                        this.props.route.params.type == "LikeReaction" ?
                            icons.likeBlueIcon :
                            this.props.route.params.type == "HeartReaction" ?
                                icons.heartIcon :
                                this.props.route.params.type == "LaughReaction" ?
                                    icons.laughIcon :
                                    this.props.route.params.type == "SadReaction" ?
                                        icons.sadIcon :
                                        item.reaction} style={styles.reactionIcon} />
                </ImageBackground>
                <TextCircularMedium style={styles.nameText}>{item.name}</TextCircularMedium>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <FlatList data={allReactions} renderItem={this.renderReactions} />
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

export default connect(mapStates, mapProps)(ReactionsList)