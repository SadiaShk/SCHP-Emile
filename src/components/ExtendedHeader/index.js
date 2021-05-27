import React from 'react';
import { View, Image, FlatList } from 'react-native';
import styles from './styles';
import { Header } from '@react-navigation/stack';
import { connect } from 'react-redux';
import vh from '../../utils/units/vh';
import MainInput from '../MainInput';
import { icons, sampleImages } from '../../assets/images';

class ExtendedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  renderBody = () => {
    console.log("route current", this.props.scene);
    switch (this.props.scene.route.name) {

      case 'Signup':
        return (
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image source={sampleImages.userimg} style={styles.useravatar} />
            <TouchableHOC style={styles.cameraBtn}>
              <Image source={icons.whiteCamera} style={styles.cameraImg} />
            </TouchableHOC>
          </View>
        )
        break;

      case 'EditProfile':
        return (
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image source={sampleImages.userimg} style={styles.useravatar} />
            <TouchableHOC style={styles.cameraBtn}>
              <Image source={icons.whiteCamera} style={styles.cameraImg} />
            </TouchableHOC>
          </View>
        )
        break;
      case 'Menu':
        return (
          <View style={styles.userCircle} key={this.props.scene.route.key}>
            <Image source={sampleImages.userimg} style={styles.useravatar} />

          </View>
        )
        break;



      case 'Services':
        return (
          <View style={{ marginTop: -7 * vh }} key={this.props.scene.route.key}>
            <MainInput
              placeholder="Find a service...."
              style={styles.input}
              rightIcon={icons.searchGray}
            />
          </View>
        )
        break;
      default:
        return (
          <View></View>
        )
        break;
    }
  };

  _returnHeaderHeight = () => {
    let height = 18 * vh;
    const activeRoute = this.props.scene.route.name;

    if (activeRoute == 'ServiceDetail') {
      height = 0 * vh
    }
    //   // height = 24 * vh
    // } else if (activeRoute == 'GroupChatScreen') {
    //   height = 15 * vh;
    // } else if (activeRoute == 'EditGroup') {
    //   height = 15 * vh;
    // }

    return height;
  };

  render() {
    console.log("props route", this.props.scene.route.name);

    return (
      <View
        style={{
          // backgroundColor : 'red' , height : 22 * vh
          height: this._returnHeaderHeight(),
        }}>
        {this.props.scene.route.name != "ServiceDetail" ? <Header {...this.props} /> : null}



        {this.renderBody()}
      </View>
    );
  }
}

// const mySelector = createDeepEqualSelector(
//   (state) => state.User.user,
//   (user) => {
//     return {
//       user,
//     };
//   },
// );

const mapStateToProps = (state) => {
  return {
    Store: state,
    // Store: mySelector(state),
  };
};
// const mapDispacthToProps = (dispatch) => {
//     return {
//         getuser: (pass, fail) => dispatch(actions.GHFS.getuser(pass, fail)),
//         loading: (value) => dispatch({ type: "LOADING", value }),
//     }
// }
export default connect(mapStateToProps, null)(ExtendedHeader);
