import { StyleSheet } from "react-native";

import theme from '../../utils/units/theme'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
  modalTouchable: {
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    width: 100 * vw,
    minHeight: 26 * vh,
    paddingVertical: 2 * vh,
    backgroundColor: theme.colors.darkPurple,
    // alignItems: "center",
    // justifyContent: "center",
    position: 'absolute',
    bottom: 0 * vh,
    left: 0 * vw,
    borderTopLeftRadius: 2 * vw,
    borderTopRightRadius: 2 * vw,

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


  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  screenPadding: {
    paddingHorizontal: 4 * vw,
  },
  expandedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },


  videoPopup: {
    position: "absolute",
    bottom: 0,
    width: 100 * vw,
    height: 30 * vh,
    backgroundColor: theme.colors.darkPurple,
    borderTopLeftRadius: 2 * vw,
    borderTopRightRadius: 2 * vw,
    shadowColor: theme.colors.white,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4 * vw,
    elevation: 2,
    paddingTop: 3 * vh,
    paddingHorizontal: 4 * vw,
  },
  videoPopupTitle: {
    fontSize: 1.9 * vh,
    marginBottom: 2 * vh
  },
  videoOption: {
    marginTop: 1.7 * vh,
    marginBottom: 1 * vh
  },
  optionValue: {
    fontSize: 2 * vh,
    marginLeft: 3 * vw,
  },
  clockIcon: {
    width: 2.1 * vh,
    height: 2.1 * vh,
    resizeMode: "contain"
  }
})