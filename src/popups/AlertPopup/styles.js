import { StyleSheet } from "react-native";

import theme from '../../utils/units/theme'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
  modalTouchable: {
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    width: 85 * vw,
    minHeight: 18 * vh,
    paddingHorizontal: 4 * vw,
    paddingVertical: 2 * vh,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3 * vw,
    position: 'absolute',
    top: 28 * vh,
    left: 7.5 * vw,
    borderRadius: 3 * vw,
    overflow: "hidden",
    paddingBottom: 3 * vh
  },
  crossIcon: {
    height: 1.4 * vh,
    width: 1.4 * vh,
    resizeMode: "contain"
  },
  crossBtn: {
    position: "absolute",
    top: 1 * vh,
    right: 1 * vh,
    width: 3.5 * vh,
    height: 3.5 * vh,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: theme.colors.blue,
    fontSize: 2.4 * vh,
    textAlign: "center",
    marginTop: 2 * vh
  },
  titleBox: {
    alignItems: "center",
  },
  underline: {
    backgroundColor: theme.colors.primaryColor,
    width: 9 * vw,
    height: 0.3 * vh,
    marginTop: 0.2 * vh


  },
  check: {
    width: 6.8 * vh,
    height: 6.8 * vh,
    resizeMode: "contain",
    // marginTop: vh * 2
  },
  paymentText: {
    marginTop: 1.6 * vh,
    textAlign: "center",
    fontSize: 1.7 * vh,
    color: theme.colors.brown,
  },
  btnRow: {
    width: 30 * vw,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2 * vh,
    justifyContent: "space-between"
  },
  btnLabel: {
    color: theme.colors.primaryColor
  },
  yesbutton: {
    maxWidth: 30 * vw,
    height: 5.5 * vh,
    marginVertical: 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.primaryColor
  },
  twoBtn: {
    maxWidth: 30 * vw,
    height: 5.5 * vh,
    marginVertical: 2 * vh,
    borderWidth: 0.3 * vh,
    borderColor: theme.colors.primaryColor
  },
  basketBall: {
    position: "absolute",
    bottom: -2 * vh,
    right: -4 * vw
  },
  btnText: {
    fontSize: 2 * vh,
    color: theme.colors.brown
  },
  btnView: {
    width: 10 * vw,
    height: 4 * vh,
    alignItems: "center",
    justifyContent: "center"
  }
})