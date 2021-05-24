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
  addPostImageRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 7 * vh,
    width: 100 * vw,
    justifyContent: "space-between",
    borderTopWidth: 0.1 * vh,
    borderTopColor: theme.colors.gray3,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 4 * vw,
  },
  addPostTitle: {
    fontSize: 1.7 * vh
  },
  galleryIcon: {
    width: 2.8 * vh,
    height: 2.8 * vh,
    resizeMode: "contain"
  },
  galleryBtn: {
    marginLeft: 3 * vw,
  },
  userImage: {
    width: 6 * vh,
    height: 6 * vh,
    borderRadius: 6 / 2 * vh,
    marginRight: 3 * vw,
  },
  username: {
    fontSize: 1.8 * vh
  },
  privacyStatusBox: {
    minWidth: 20 * vw,
    height: 3.3 * vh,
    borderWidth: 0.1 * vh,
    borderColor: theme.colors.gray3,
    marginTop: 0.8 * vh,
    borderRadius: 1 * vw,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 2.2 * vw,
    // justifyContent: "space-between"
  },
  privacyIcon: {
    width: 1.9 * vh,
    height: 1.9 * vh,
    resizeMode: "contain",
    marginRight: 1.5 * vw
  },
  privacyText: {
    fontSize: 1.65 * vh,
    color: theme.colors.gray3,
    marginRight: 1 * vw
  },
  dropdownIcon: {
    width: 1.3 * vh,
    height: 1.3 * vh,
    resizeMode: "contain",
    marginTop: 0.3 * vh
  },
  inputView: {
    minHeight: 7.2 * vh,
    height: null,
    marginBottom: 0,
    borderWidth: 0,
    padding: 0,
    marginTop: 2.5 * vh,
    borderRadius: 0,
    backgroundColor: theme.colors.darkPurple,
    marginBottom: 0.8 * vh
  },
  inputFieldStyle: {
    minHeight: 7.2 * vh,
    height: null,
    fontSize: 1.8 * vh,
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  postImageAdd: {
    width: 92 * vw,
    height: 18 * vh,
    borderRadius: 2 * vw,

  },
  imageContainer: {
    marginTop: 1.7 * vh,
    marginBottom: 1 * vh
  },
  gameImage2: {
    width: 92 * vw,
    height: 18 * vh,
    borderRadius: 2 * vw,
    marginTop: 1.7 * vh,
    // marginBottom: 1 * vh
  },
  postImageView: {
    width: 92 * vw,
    height: 18 * vh,
    borderRadius: 2 * vw,
  },
  postInputView: {
    paddingHorizontal: 4 * vw
  },
  closeBtn: {
    width: 2 * vh,
    height: 2 * vh,
    borderRadius: 2 / 2 * vh,
    position: "absolute",
    top: 1 * vh,
    right: 2 * vw,
    backgroundColor: theme.colors.red,
    alignItems: "center",
    justifyContent: "center"
  },
  crossIcon: {
    width: 1.2 * vh,
    height: 1.2 * vh,
    resizeMode: "contain"
  },
  blurView1: {
    backgroundColor: '#00000061',
    width: 92 * vw,
    height: 18 * vh,
    borderRadius: 2 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  playBtn: {
    width: 4.5 * vh,
    height: 4.5 * vh,
    borderRadius: 4.5 / 2 * vh,
    backgroundColor: theme.colors.lightPurple,
    alignItems: "center",
    justifyContent: "center"
  },
  playIcon: {
    width: 2 * vh,
    height: 2 * vh,
    marginLeft: 1 * vw,
  },
  postImage2: {
    borderRadius: 1 * vw,
    width: 46 * vw,
    height: 18 * vh,
    marginRight: 1 * vw,
    marginBottom: 0.5 * vh
  },
  blurViewVideo: {
    borderRadius: 1 * vw,
    width: 46 * vw,
    height: 18 * vh,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00000061',

  },
  multipleImagesRow: {
    flex: 1,
    width: 94 * vw,
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 1.7 * vh,
    marginBottom: 1.2 * vh
  },
  blurView: {
    backgroundColor: "#24242491",
    width: 30.3 * vw,
    height: 11 * vh,
    borderRadius: 1 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  additionalCount: {
    fontSize: 2.4 * vh
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
    paddingTop: 1.7 * vh
  },
  optionValue: {
    fontSize: 1.7 * vh,
    marginLeft: 3 * vw,
  },
  clockIcon: {
    width: 1.9 * vh,
    height: 1.9 * vh,
    resizeMode: "contain"
  }
})