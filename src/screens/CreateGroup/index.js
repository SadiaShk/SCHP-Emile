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


class CreateGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                "Mark Carson",
                "Maria Jay",
                "Joseph Carter",
                "Oliver James",
                "Emma Clarke",
                "Harry Robert",
                "Josephine",
                "Joseph Mak",
                "Oliver Henry",
                "Henry Ford"
            ],
            selectedParticipants: []

        }
    }

    componentDidMount() {
        SplashScreen.hide()


    }
    addItem = (item) => {
        let i = this.state.selectedParticipants.findIndex(x => x === item)
        if (i > -1) {
            var temp = this.state.selectedParticipants
            temp.splice(i, 1);
            this.setState({ selectedParticipants: temp })
        }
        else {
            this.setState({ selectedParticipants: [...this.state.selectedParticipants, item] }) //simple value
        }
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
                            <TextCircularMedium style={styles.headerTitle}>Add participants</TextCircularMedium>
                        </View>
                    </View>
                    <Button title="Create" style={styles.nextBtn}
                        onPress={() => this.props.navigation.navigate("GroupChatScreen")}
                    />
                </View >
                <ScrollView contentContainerStyle={styles.screenPadding}>
                    <MainInput
                        label="Group Name"
                        placeholder="Type a name"
                        style={styles.inputField}
                    />
                    {this.state.users.map((item, index) => {
                        var selected = false
                        let i = this.state.selectedParticipants.findIndex(x => x === item)
                        if (i > -1) {
                            selected = true
                        }
                        return (
                            <FriendRequestCard cardStyle={6} item={item}
                                onPress={() => { }}
                                iconCheck={icons.redCross}
                            />

                        )
                    })}

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

export default connect(mapStates, mapProps)(CreateGroup)