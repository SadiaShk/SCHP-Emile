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
    width: 90 * vw,
    height: 60 * vh,

    paddingVertical: 1.5 * vh,
    backgroundColor: theme.colors.darkPurple,
    // alignItems: "center",
    // justifyContent: "center",
    position: 'absolute',
    top: 20 * vh,
    left: 5 * vw,
    borderTopLeftRadius: 2 * vw,
    borderTopRightRadius: 2 * vw,
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4 * vw,
    paddingBottom: 1.5 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    marginTop: 1 * vh

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
    position: "absolute",
    right: 3 * vw,
    top: 1 * vh
  },
  backIcon: {
    width: 1.5 * vh,
    height: 1.5 * vh,
    resizeMode: "contain",
  },
  popupTitle: {
    fontSize: 2.2 * vh
  },
  videoCallBtn: {
    width: 75 * vw,
    height: 5 * vh,
    borderRadius: 1.6 * vw
  },
  participantsView: {
    height: 45 * vh,
    marginBottom: 2 * vh
  },
  noteText: {
    fontSize: 1.45 * vh,
    marginTop: 0.6 * vh
  }
})