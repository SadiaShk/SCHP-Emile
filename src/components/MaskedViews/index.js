import React from 'react';
import { Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { icons, images } from '../../assets';
import MaskedView from '@react-native-community/masked-view';
export default MaskedViews = props => {
  switch (props.cardStyle) {
    default:
      return (
        <MaskedView
          style={styles.container}
          maskElement={props.element}
        >
          {props.children}
        </MaskedView>
      )
      break;
  }

};
