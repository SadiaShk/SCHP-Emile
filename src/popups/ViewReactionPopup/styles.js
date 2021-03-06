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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4 * vw,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: theme.colors.gray3,
    paddingBottom: 2 * vh

  },
  row: {
    flexDirection: "row",
    alignItems: "center"
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
  reactionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4 * vw,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: theme.colors.gray3,
    paddingVertical: 1.6 * vh
  },
  titleBtn: {
    height: 6.2 * vh,
    width: 20 * vw,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 1.75 * vh
  },
  likeReactIcon: {
    width: 2.4 * vh,
    height: 2.4 * vh,
    resizeMode: "contain",
    marginRight: 1 * vw,
  },
  requestTab: {
    height: 6.2 * vh,
    width: 25 * vw,
    backgroundColor: theme.colors.darkPurple,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: theme.colors.gray3,
  },
  tabView: {

    overflow: "hidden",
    backgroundColor: theme.colors.darkPurple,

  },
})