import React from 'react'
import {
    Image
} from 'react-native'
import styles from './styles'
import TouchableHOC from '../TouchableHOC'
import LinearGradient from 'react-native-linear-gradient';

export default IconButton = (props) => {
    return (
        <TouchableHOC {...props} style={[styles.container, props.style]}>
            <LinearGradient colors={['rgba(255,139,67,1)', 'rgba(225,97,18,1)']} style={[styles.bannerGradient, props.gradientStyle]}>

                <Image source={props.icon} style={[styles.icon, props.iconStyle]} />
            </LinearGradient>
        </TouchableHOC>
    )
}