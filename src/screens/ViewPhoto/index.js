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
import ImageEditOptionsPopup from '../../popups/ImageEditOptionsPopup';

import AlertPopup from '../../popups/AlertPopup';

class ViewPhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke",
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke"
            ],

        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }
    renderItem = ({ item, index }) => {

        return (
            <FriendRequestCard cardStyle={5} item={item} />
        )

    }


    render() {

        return (
            <View style={styles.mainContainer}>
                <ImageEditOptionsPopup
                    ref={(e) => (this.imageEditPopup = e)}
                    onDeletePress={() => this.confirmRemove.show()}
                />
                <AlertPopup
                    ref={(e) => (this.confirmRemove = e)}
                    titleText="Remove"
                    description={"Are you sure you want to\nremove this ?"}
                    onSuccess2={() => this.photoRemoved.show()}
                />
                <AlertPopup
                    ref={(e) => (this.photoRemoved = e)}
                    titleText="Removed"
                    description={"Successfully Removed."}
                    onPressBtn1={() => { }}
                />
                {this.props.route.params?.mediaType == "image" ?
                    <ImageBackground source={sampleImages.postImage7} style={styles.imageView}>
                        <View style={styles.headerRow}>
                            <View style={styles.row}>
                                <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                                    <Image source={icons.backArrow} style={styles.backArrow} />
                                </TouchableHOC>
                                <View>
                                    <TextCircularMedium style={styles.headerTitle}>Photos</TextCircularMedium>
                                </View>
                            </View>
                            <TouchableHOC onPress={() => this.imageEditPopup.show()}>
                                <Image source={icons.threeDotVertical} style={styles.verticalDots} />
                            </TouchableHOC>
                        </View >

                    </ImageBackground> :
                    <ImageBackground source={sampleImages.postImage7} style={styles.imageView}>
                        <View style={styles.headerRow}>
                            <View style={styles.row}>
                                <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                                    <Image source={icons.backArrow} style={styles.backArrow} />
                                </TouchableHOC>
                                <View>
                                    <TextCircularMedium style={styles.headerTitle}>Media</TextCircularMedium>
                                </View>
                            </View>

                        </View >
                        <TouchableHOC style={styles.playBtn}>
                            <Image source={icons.playBtn} style={styles.playIcon} />
                        </TouchableHOC>
                        <View style={styles.descView}>
                            <TextCircularMedium style={styles.titleText}>Added On Feb 15, 2021</TextCircularMedium>
                            <TextCircularBook
                                numberOfLines={0}
                                style={styles.descText}
                            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos</TextCircularBook>
                        </View>
                    </ImageBackground>
                }

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

export default connect(mapStates, mapProps)(ViewPhoto)