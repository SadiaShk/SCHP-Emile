import React from 'react';
import { Text, View, Image } from 'react-native';
import TextCircularBook from '../TextCircularBook';
import styles from './styles';
import TouchableHOC from '../../components/TouchableHOC';
import { icons } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import TabBarButton from '../TabBarButton';
export default class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    console.log("props check", this.props);
    return (
      <View style={styles.container}>
        {this.props.state.routes.map((route, index) => {
          // const { options } = this.descriptors[route.key];
          const label = route.name;
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          //   : options.title !== undefined
          //     ? options.title
          //     : route.name;

          const isFocused = this.props.state.index === index;

          const onPress = () => {
            const event = this.props.navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              this.props.navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            this.props.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabBarButton params={this.props.navigation}
              focused={isFocused}
              name={route.name}
              onPress={onPress}
            />
          );
        })}
        <TabBarButton
          onPress={() => this.props.navigation.openDrawer()}
          params={this.props.navigation} name={"Setting"} />
      </View>
    );
  }
};
