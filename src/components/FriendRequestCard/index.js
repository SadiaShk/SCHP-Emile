import React from 'react'
import {
    Text, View, Image
} from 'react-native'
import { icons, sampleImages } from '../../assets/images'
import styles from './styles'
import TextCircularBook from '../TextCircularBook'
import Button from '../Button'
import TouchableHOC from '../TouchableHOC'

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
            case 3:
                return (
                    <View style={[styles.cardContainer, styles.containerStyle2]}>
                        <View style={styles.rowstyle}>
                            <Image source={sampleImages.userImage} style={styles.userImage2} />
                            <TextCircularBook style={styles.userNameText}>Mark Carson</TextCircularBook>
                        </View>
                        <Button title="Remove" style={styles.removeBtn} />

                    </View>
                )
                break;
            case 4:
                return (
                    <View style={styles.cardContainer}>
                        <Image source={sampleImages.userImage} style={styles.userImage} />
                        <View>
                            <TextCircularBook style={styles.descText}>Mark Carson</TextCircularBook>
                            <TextCircularBook style={styles.timeText}>10 Mutual Friends</TextCircularBook>
                            <View style={styles.row}>
                                <Button title="Add" style={styles.confirmBtn} />
                                <Button title="Remove" style={styles.deleteBtn} />

                            </View>
                        </View>
                    </View>
                )
                break;
            case 5:
                return (
                    <TouchableHOC style={[styles.cardContainer, styles.containerStyle2]}>
                        <View style={styles.rowstyle}>
                            <Image source={sampleImages.userImage} style={styles.userImage2} />
                            <TextCircularBook style={styles.userNameText}>{this.props.item}</TextCircularBook>
                        </View>
                    </TouchableHOC>
                )
                break;
            case 6:
                return (
                    <View style={[styles.cardContainer, styles.containerStyle2, this.props.cardContainerStyle]}>
                        <View style={styles.rowstyle}>
                            <Image source={sampleImages.userImage} style={styles.userImage2} />
                            <TextCircularBook style={styles.userNameText}>{this.props.item}</TextCircularBook>
                        </View>
                        <TouchableHOC onPress={this.props.onPress}>
                            <Image source={this.props.iconCheck} style={styles.checkbox} />
                        </TouchableHOC>
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