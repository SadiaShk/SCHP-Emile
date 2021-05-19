import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
export default style = StyleSheet.create({
  container: {
    width: '100%',
    height: 6.4 * vh,
    borderRadius: 2.6 * vw,

    justifyContent: 'center',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6 * vw,
    backgroundColor: theme.colors.primaryColor
  },

  label: { fontSize: vh * 1.9, color: 'white', fontFamily: Fonts.GB },
  leftImage: {
    width: 2 * vh,
    height: 2 * vh, resizeMode: "contain",
    tintColor: "#FFF",
    marginRight: 2 * vw,
  }
});
