import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { icons, images } from '../../assets';

export default MaskedElement = props => {
  switch (props.cardStyle) {
    default:
      return (
        <View style={{ backgroundColor: 'transparent', flex: 1, }}>
          <LinearGradient colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF50']} style={styles.linearGradient}>
          </LinearGradient>
        </View>
      )
      break;
  }

};
