import React from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from './styles'
import { banners, icons, sampleImages } from '../../assets/images'
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TextCircularMedium from '../../components/TextCircularMedium';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableHOC from '../../components/TouchableHOC';
import FriendRequestCard from '../../components/FriendRequestCard';
import MainInput from '../../components/MainInput';


class CreateChat extends React.Component {
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
                <View style={styles.headerRow}>
                    <View style={styles.row}>
                        <TouchableHOC onPress={() => this.props.navigation.goBack()}>
                            <Image source={icons.backArrow} style={styles.backArrow} />
                        </TouchableHOC>
                        <View>
                            <TextCircularMedium style={styles.headerTitle}>Create Chat</TextCircularMedium>
                        </View>
                    </View>
                </View >
                <ScrollView contentContainerStyle={styles.screenPadding}>
                    <MainInput
                        label="Message To"
                        placeholder="Type a name"
                        style={styles.inputField}
                    />
                    <TouchableHOC onPress={() => this.props.navigation.navigate("AddParticipant")}>
                        <MainInput
                            label="Group"
                            placeholder="Create a group"
                            editable={false}
                            style={styles.inputField}
                            leftIcon={icons.friendIcon}
                        />
                    </TouchableHOC>
                    <FlatList
                        scrollEnabled={false}
                        contentContainerStyle={styles.flatlistContainer}
                        style={styles.flatlist}
                        data={this.state.users}
                        renderItem={this.renderItem} />
                </ScrollView>
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

export default connect(mapStates, mapProps)(CreateChat)