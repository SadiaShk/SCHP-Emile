import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 6.2 * vh,
    backgroundColor: theme.colors.black1,
    borderRadius: 2.6 * vw,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: vh * 2,
  },
  field: {
    flex: 1,
    // width: 60 * vw,
    fontFamily: Fonts.RBR,
    marginLeft: vw * 2,
    fontSize: 1.7 * vh,
    // top:0.3*vh,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
    paddingLeft: 2 * vw,
    color: theme.colors.white,
    paddingRight: vw * 3,
  },
  leftIcon: {
    marginLeft: 4 * vw,
    height: 1.5 * vh,
  },

  label: {
    fontSize: 1.8 * vh,
    color: theme.colors.primaryColor,
    marginLeft: 2 * vw,
  },
  labelContainer: {
    width: '100%',
    marginBottom: vh * 0.4,
  },
  rightIconBtn: {
    marginRight: 4 * vw,

    height: 2.5 * vh,
    width: 4 * vw,
    alignItems: 'center',
    justifyContent: "center",

  },
  rightIcon: {
    height: 2.2 * vh,
    width: 2.2 * vh,
    resizeMode: "contain",
    marginRight: 4 * vw,
  },
});
export default styles;
