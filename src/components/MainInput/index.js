import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';


import styles from './styles';
import Ripple from 'react-native-material-ripple';
import IconButton from '../IconButton';
import { icons } from '../../assets/images';
import vh from '../../utils/units/vh';
import TextCircularBook from '../TextCircularBook';
import theme from '../../utils/units/theme';
import TextCircularBold from '../TextCircularBold';
import TouchableHOC from '../TouchableHOC';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  renderEye = () => {
    if (this.props.secureTextEntry === true) {
      return (
        <TouchableHOC onPress={this.toggle}>
          <Image
            style={styles.rightIcon}
            source={this.state.show === false ? icons.closeEye : icons.openEye}
          />
        </TouchableHOC>
      );
    }
  };
  renderLabel = () => {
    if (this.props.label) {
      return (
        <View style={[styles.labelContainer, this.props.labelContainer]}>
          <TextCircularBook style={[styles.label, this.props.labelStyles]}>
            {this.props.label}{' '}
            {this.props.required ? (
              <TextCircularBook style={[styles.label, { color: '#CE1127' }]}>
                *
              </TextCircularBook>
            ) : null}
          </TextCircularBook>
          {this.props.hint ? (
            <TextCircularBook
              style={[
                styles.label,
                { color: '#666666', fontSize: vh * 1.6, marginBottom: vh * 1 },
                this.props.labelStyle
              ]}>
              {this.props.hint}{' '}
            </TextCircularBook>
          ) : null}
        </View>
      );
    }
  };
  render() {
    var secure = false;
    if (this.props.secureTextEntry === true && this.state.show === false) {
      secure = true;
    } else {
      secure = false;
    }
    return (
      <View>
        {this.renderLabel()}
        <View style={[styles.container, { height: this.props.multiline ? 15 * vh : 6.2 * vh }, this.props.style]}>
          {this.props.leftIcon && (
            <IconButton
              iconStyle={[styles.leftIcon, this.props.leftIconStyle]}
              icon={this.props.leftIcon}
            />
          )}
          <TextInput
            placeholderTextColor={theme.colors.gray4}
            {...this.props}
            secureTextEntry={secure}
            selectionColor={theme.colors.primaryColor}
            style={[styles.field, { height: this.props.multiline ? 15 * vh : 5.5 * vh }, this.props.fieldStyle]}
          />
          {this.renderEye()}
          {this.props.rightIcon2 && (
            <TouchableHOC
              style={[styles.rightIconBtn]}
              onPress={this.props.rightIconPress}
            >
              <Image source={this.props.rightIcon2}
                style={[styles.rightIcon, this.props.rightIconStyle]}
              />
            </TouchableHOC>
            // <IconButton
            //   iconStyle={[styles.rightIcon, this.props.rightIconStyle]}
            //   icon={this.props.rightIcon2}
            // />
          )}
          {this.props.rightIcon && (
            <TouchableHOC
              style={[styles.rightIconBtn]}
              onPress={this.props.rightIconPress}
            >
              <Image source={this.props.rightIcon}
                style={[styles.rightIcon, this.props.rightIconStyle]}
              />
            </TouchableHOC>
          )}
        </View>
      </View>
    );
  }
}
export default MainInput;
