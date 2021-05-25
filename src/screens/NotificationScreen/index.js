import React from 'react'
import { View, FlatList, Image, ImageBackground, KeyboardAvoidingView, TextInput, } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularBold from '../../components/TextCircularBold';
import TextCircularMedium from '../../components/TextCircularMedium';
import Button from '../../components/Button';
import NotificationCard from '../../components/NotificationCard';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableHOC from '../../components/TouchableHOC';
import FriendRequestCard from '../../components/FriendRequestCard';


class NotificationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    componentDidMount() {
        SplashScreen.hide()

    }
    render() {

        return (
            <ScrollView style={styles.mainContainer}
            >
                <View style={styles.headerRow}>
                    <TextCircularMedium style={styles.headerTitle}>Notifications</TextCircularMedium>
                </View>
                <View style={styles.screenPadding}>
                    <TextCircularMedium style={styles.sectionTitle}>New</TextCircularMedium>
                    <NotificationCard />
                    <NotificationCard />

                </View>
                <View style={styles.screenPadding}>
                    <View style={styles.expandedRow}>
                        <TextCircularMedium style={styles.sectionTitle}>Friend requests</TextCircularMedium>
                        <TouchableHOC>
                            <TextCircularMedium style={styles.seeAllText}>See All</TextCircularMedium>
                        </TouchableHOC>
                    </View>
                    <FriendRequestCard />
                    <FriendRequestCard />

                    <FriendRequestCard />

                </View>
                <View style={styles.screenPadding}>
                    <TextCircularMedium style={styles.sectionTitle}>Earlier</TextCircularMedium>
                    <NotificationCard />
                    <NotificationCard />

                    <NotificationCard />
                    <NotificationCard />

                </View>
            </ScrollView>

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

export default connect(mapStates, mapProps)(NotificationScreen)