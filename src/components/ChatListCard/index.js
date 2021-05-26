import React from 'react'
import {
    Text, View, Image
} from 'react-native'
import { icons, sampleImages } from '../../assets/images'
import styles from './styles'
import TextCircularBook from '../TextCircularBook'
import Button from '../Button'

export default class ChatListCard extends React.Component {
    render() {

        return (
            <View style={styles.cardContainer}>
                <Image source={sampleImages.userImage} style={styles.userImage} />
                <View>
                    <TextCircularBook style={styles.descText}>Mark Carson sent you a friend request</TextCircularBook>
                    <TextCircularBook style={styles.timeText}>3 days ago</TextCircularBook>
                    <View style={styles.row}>
                        <Button title="Confirm" style={styles.confirmBtn} />
                        <Button title="Delete" style={styles.deleteBtn} />

                    </View>
                </View>
            </View>
        )
        break;

    }
}