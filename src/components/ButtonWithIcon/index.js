import React from 'react'
import {
    Image,
    Text
} from 'react-native'
import TouchableHOC from '../TouchableHOC'
import styles from './styles'
import {
    icons
} from '../../assets/images'
import theme from '../../utils/units/theme'
import TextCircularBold from '../TextCircularBold'

export default ButtonWithIcon = (props) => {
    return (
        <TouchableHOC
            rippleColor={theme.colors.darkGrey}

            {...props}

            style={[styles.container, props.style]}
        >
            {props.lefticon && <Image
                style={[styles.lefticon, props.iconStyle]}
                source={props.lefticon ? props.lefticon : icons.arrowRightWhite}
            />}
            <TextCircularBold style={[styles.text, props.textStyle]}>{props.title ? props.title : 'Button'}</TextCircularBold>
            {props.icon && <Image
                style={[styles.icon, props.iconStyle]}
                source={props.icon ? props.icon : icons.arrowRightWhite}
            />}
        </TouchableHOC>
    )
}