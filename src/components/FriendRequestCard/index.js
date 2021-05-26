import React from 'react'
import {
    Text, View, Image
} from 'react-native'
import { icons, sampleImages } from '../../assets/images'
import styles from './styles'
import TextCircularBook from '../TextCircularBook'
import Button from '../Button'

export default class FriendRequestCard extends React.Component {
    render() {
        switch (this.props.cardStyle) {
            case 1:
                return (
                    <View style={styles.cardContainer}>
                        <Image source={sampleImages.userImage} style={styles.userImage} />
                        <View>
                            <TextCircularBook style={styles.descText}>Mark Carson</TextCircularBook>
                            <View style={styles.row}>
                                <Button title="Add" style={styles.confirmBtn} />
                                <Button title="Remove" style={styles.deleteBtn} />

                            </View>
                        </View>
                    </View>
                )
                break;
            case 2:
                return (
                    <View style={styles.cardContainer}>
                        <Image source={sampleImages.userImage} style={styles.userImage} />
                        <View>
                            <View style={styles.expandedRow}>
                                <TextCircularBook style={styles.userNameText}>Mark Carson</TextCircularBook>
                                <TextCircularBook style={styles.numberText}>+123-456-789</TextCircularBook>

                            </View>
                            <View style={styles.row}>
                                <Button title="Add" style={styles.confirmBtn} />
                                <Button title="Remove" style={styles.deleteBtn} />

                            </View>
                        </View>
                    </View>
                )
                break;
            default:
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
}