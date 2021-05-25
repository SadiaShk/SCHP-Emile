import React from 'react'
import {
    Text, View, Image
} from 'react-native'
import { icons } from '../../assets/images'
import styles from './styles'
import TextCircularBook from '../TextCircularBook'

export default class NotificationCard extends React.Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.bellContainer}>
                    <Image source={icons.tiltBell} style={styles.bellIcon} />
                </View>
                <TextCircularBook numberOfLines={2} style={styles.descText}>Lorem ipsum dolor sit amet, consetetur are it sadipscing elitr,</TextCircularBook>
                <TextCircularBook style={styles.timeText}>3 mins ago</TextCircularBook>
            </View>
        )
    }
}