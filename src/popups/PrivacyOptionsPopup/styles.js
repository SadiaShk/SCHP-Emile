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
    minHeight: 85 * vh,

    paddingVertical: 1.5 * vh,
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


  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4 * vw,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: theme.colors.gray3,
    paddingBottom: 1.5 * vh,
    marginBottom: 2 * vh

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
  backBtn: {
    marginRight: 3 * vw,
  },
  backIcon: {
    width: 2.2 * vh,
    height: 2.2 * vh,
    resizeMode: "contain",
  },
  popupTitle: {
    fontSize: 2 * vh
  },
  postBtn: {
    width: 23 * vw,
    height: 4.8 * vh,
    borderRadius: 1.5 * vw,
  },
  postPrivacyTitle: {
    fontSize: 1.9 * vh,
    marginBottom: 2 * vh
  },
  videoOption: {
    marginTop: 1.7 * vh,
    marginBottom: 1 * vh
  },
  optionValue: {
    fontSize: 1.8 * vh,
    marginLeft: 3 * vw,
  },
  clockIcon: {
    width: 1.8 * vh,
    height: 1.8 * vh,
    resizeMode: "contain",
    tintColor: theme.colors.white
  }
})