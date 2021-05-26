import { StyleSheet } from 'react-native';

import vw from "../../utils/units/vw";
import vh from "../../utils/units/vh";
import theme from '../../utils/units/theme';


export default styles = StyleSheet.create({
  cardContainer: {
    marginTop: 2 * vh,
    backgroundColor: "#111111",
    paddingHorizontal: 4 * vw,
    paddingVertical: 2 * vh,
    borderRadius: 2 * vw
  },
  videoImg: {
    width: 92 * vw,
    height: 20 * vh,
    marginTop: 2 * vh,
    alignItems: "center",
    justifyContent: "center"
  },
  videoImgStyle: {
    width: 92 * vw,
    height: 20 * vh,
    borderRadius: 2 * vw
  },
  playIcon: {
    width: 2.2 * vh,
    height: 2.2 * vh,
    resizeMode: "contain"
  },
  playBtn: {
    width: 5 * vh,
    height: 5 * vh,
    borderRadius: 5 / 2 * vh,
    borderWidth: 0.15 * vh,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.modal_shadow_color,
    alignItems: "center",
    justifyContent: "center"
  },
  viewMarginTop: {
    marginTop: 1.7 * vh,
  },
  videoTitle: {
    color: theme.colors.red,
    fontSize: 1.9 * vh
  },
  songTitle: {
    fontSize: 1.9 * vh,
    color: theme.colors.red
  },
  videoDesc: {
    fontSize: 1.7 * vh,
    color: theme.colors.gray3,
    marginTop: 0.2 * vh
  },
  sortImg: {
    width: 2 * vh,
    height: 2 * vh,
    resizeMode: "contain",
    marginLeft: 2 * vw
  },
  expandedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  audioBox: {
    backgroundColor: theme.colors.black6,
    width: 23 * vw,
    height: 10 * vh,
    borderRadius: 2 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  imageBg: {
    width: 23 * vw,
    height: 10 * vh,
    borderRadius: 2 * vw,
  },
  musicIcon: {
    width: 5 * vh,
    height: 5 * vh,
    resizeMode: "contain",
    position: "absolute"
  },
  descBox: {
    width: 68 * vw,
    marginLeft: 2 * vw,
    height: 10 * vh,
    // backgroundColor:"red",
    justifyContent: "center",
  },
  liveView: {
    backgroundColor: theme.colors.red,
    marginTop: 1 * vh,
    height: 2.5 * vh,
    alignItems: "center",
    borderRadius: 5 * vw,
    paddingTop: 0.3 * vh,
    // alignItems: "center",
    paddingHorizontal: 2 * vw,
    marginBottom: 0.5 * vh
  },
  liveText: {
    fontSize: 1.3 * vh,
    color: theme.colors.white,
    marginTop: 0.1 * vh,
  },
  sortImgAbsolute: {
    right: 4 * vw,
    top: 0,
    position: "absolute",
    width: 2 * vh,
    height: 2 * vh,
    resizeMode: "contain",
  },
  dateText: {
    color: theme.colors.gray2,
    fontSize: 1.5 * vh,
    marginTop: 1 * vh
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    borderRadius: 5
  }
});
