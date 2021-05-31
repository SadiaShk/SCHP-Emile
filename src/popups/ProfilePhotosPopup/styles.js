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
    minHeight: 89 * vh,

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
  filterLabel: {
    fontSize: 1.6 * vh,
    color: theme.colors.gray6,
    marginRight: 2 * vw,
  },
  moreBtn: {
    marginTop: 2 * vh,
    marginBottom: 4 * vh,
    borderRadius: 1.5 * vw,
    height: 5 * vh,
    width: 86 * vw,
    alignSelf: "center",
  },
  filterOptionBtnText: {
    fontSize: 1.56 * vh,
    color: theme.colors.gray3,
  },
  dropwdownIcon: {
    width: 1.5 * vh,
    height: 1.5 * vh,
    resizeMode: "contain"
  },
  filterOptionBtn: {
    width: 25 * vw,
    backgroundColor: theme.colors.black1,
    borderRadius: 1 * vw,
    height: 4.3 * vh,
    paddingHorizontal: 5 * vw,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  photosImageView: {
    width: 29 * vw,
    height: 13 * vh,
    marginBottom: 1 * vh,
    marginRight: 2 * vw,

  },
  addImageBg: {
    width: 29 * vw,
    height: 13 * vh,
    borderRadius: 2 * vw,
    backgroundColor: theme.colors.black1,
    marginBottom: 1 * vh,
    marginRight: 2 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  addImageIcon: {
    width: 6 * vh,
    height: 6 * vh,
    resizeMode: "contain"
  },
  photosImage: {
    width: 29 * vw,
    height: 13 * vh,
    borderRadius: 2 * vw,
  },
  flatlist: {
    height: 65 * vh,
    width: 94 * vw,
    marginLeft: 4 * vw,
  },
  flatlistContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  blurView1: {
    backgroundColor: '#00000061',
    width: 29 * vw,
    height: 13 * vh,
    borderRadius: 2 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  playBtn: {
    width: 4 * vh,
    height: 4 * vh,
    borderRadius: 4 / 2 * vh,
    backgroundColor: theme.colors.lightPurple,
    alignItems: "center",
    justifyContent: "center"
  },
  playIcon: {
    width: 1.7 * vh,
    height: 1.7 * vh,
    marginLeft: 1 * vw,
  },
})