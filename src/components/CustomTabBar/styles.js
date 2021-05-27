import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
export default style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkPurple,
    // height: 6 * vh,
    // borderBottomWidth: 0.02 * vh,
    // borderBottomColor: theme.colors.gray3,
    flexDirection: 'row',
    height: 6.7 * vh,
    justifyContent: "center",
    alignItems: "center"
  },

  label: { fontSize: vh * 1.9, color: 'white', fontFamily: Fonts.GB },
  leftImage: {
    width: 2 * vh,
    height: 2 * vh, resizeMode: "contain",
    tintColor: "#FFF",
    marginRight: 2 * vw,
  }
});
