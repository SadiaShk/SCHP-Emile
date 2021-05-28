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


class GroupInfoAdmin extends React.Component {
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
            selectedParticipants: [],
            isAdmin: true

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
                            <TextCircularMedium style={styles.headerTitle}>Group Name</TextCircularMedium>
                            <TextCircularBook style={styles.participantsName}>Mark , Lisa , Jordan & 10 more</TextCircularBook>
                        </View>
                    </View>
                    <View style={styles.row}>
                        {this.state.isAdmin ? <Button title="Add Users" style={styles.nextBtn}
                            onPress={() => this.props.navigation.navigate("AddParticipant")}
                        /> :
                            <Button title="Delete" style={styles.nextBtn}
                                onPress={() => this.props.navigation.navigate("AddParticipant")}
                            />
                        }
                        {this.state.isAdmin ? <TouchableHOC style={styles.trashBtn}>
                            <Image source={icons.trashIcon2} style={styles.trashIcon} />
                        </TouchableHOC> : null}
                    </View>
                </View >
                <ScrollView contentContainerStyle={styles.screenPadding}>
                    {this.state.isAdmin ? <MainInput
                        label="Group Name"
                        placeholder="Type a name"
                        value="Gaming World"
                        style={styles.inputField}
                    /> : null}
                    <Button title="Leave group" style={styles.leaveBtn} />
                    {this.state.users.map((item, index) => {
                        var selected = false
                        let i = this.state.selectedParticipants.findIndex(x => x === item)
                        if (i > -1) {
                            selected = true
                        }
                        return (
                            <FriendRequestCard cardStyle={3} item={item}
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

export default connect(mapStates, mapProps)(GroupInfoAdmin)