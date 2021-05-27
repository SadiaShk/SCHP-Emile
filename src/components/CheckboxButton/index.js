import React from 'react'
import {
    Image,
    View,
} from 'react-native'
import TouchableHOC from '../TouchableHOC'
import styles from './styles'
import {
    icons
} from '../../assets/images'
import theme from '../../utils/units/theme';
import vw from '../../utils/units/vw';
import TextCircularBook from '../TextCircularBook'
export default class CheckboxButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
    }

    componentDidMount = () => {
        this.setState({ isSelected: this.props.isSelected })
    }
    render() {
        const props = this.props
        return (
            <View style={[styles.checkBoxConatiner, props.containerStyle]}>
                <TouchableHOC
                    rippleColor='black'

                    {...props}
                    onPress={() => props.onPressCheckbox()}
                >
                    {this.props.isSelected ?
                        <Image source={icons.unCheckbox} style={styles.checkboxStyle} /> :
                        <Image source={icons.unCheckbox} style={styles.checkboxStyle} />
                    }
                </TouchableHOC>
                <TextCircularBook numberOfLines={2} style={[styles.checkboxText, props.textStyle]}>{props.desc ? props.desc : "Some text"}</TextCircularBook>
            </View>

        )
    }

}