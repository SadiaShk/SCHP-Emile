import React from 'react';
import { Text, View, Image } from 'react-native';
import TextCircularBook from '../TextCircularBook';
import styles from './styles';
import TouchableHOC from '../../components/TouchableHOC';
import { icons } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
export default Button = (props) => {
  return (
    <TouchableHOC
      style={[styles.container, props.style]}
      onPress={props.onPress}>

      {props.rightIcon ? <Image source={props.rightIcon} style={styles.leftImage} />
        : null}
      <TextCircularBook style={[styles.label, props.labelStyle]}>
        {props.title}
      </TextCircularBook>
    </TouchableHOC>
  );
};
