import { StyleSheet } from 'react-native';
import vh from '../../utils/units/vh';
import vw from '../../utils/units/vw';
import { Fonts } from '../../assets/fonts';
import theme from '../../utils/units/theme';
const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    paddingTop: 1 * vh,
    paddingHorizontal: 3 * vw,
    paddingBottom: 1 * vh,
    borderTopWidth: 1.3 * vh,
    borderTopColor: theme.colors.black1,
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 1 * vh,
  },
  userImage: {
    width: 5.5 * vh,
    height: 5.5 * vh,
    borderRadius: 5.5 / 2 * vh,
  },
  imageBorder: {
    borderColor: theme.colors.lightGreen,
    borderWidth: 0.17 * vh,
    width: 6.3 * vh,
    height: 6.3 * vh,
    borderRadius: 6.3 / 2 * vh,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 3 * vw,
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  expandedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  username: {
    fontSize: 2 * vh,
    marginBottom: 0.3 * vh
  },
  postDate: {
    fontSize: 1.65 * vh,
    color: theme.colors.gray3
  },
  postDateIcon: {
    width: 1.7 * vh,
    height: 1.7 * vh,
    resizeMode: "contain",
    marginRight: 2 * vw,
    tintColor: theme.colors.gray3
  },
  optionBtn: {
    alignSelf: "flex-start"
  },
  horizontalDot: {
    width: 2.2 * vh,
    height: 2.3 * vh,
    resizeMode: "contain"
  },
  postText: {

    fontSize: 1.9 * vh
  },
  likeReactIcon: {
    width: 2.4 * vh,
    height: 2.4 * vh,
    resizeMode: "contain"
  },
  reactIconLeft: {
    marginLeft: -1.1 * vw
  },
  reactionCount: {
    fontSize: 1.9 * vh,
    marginLeft: 2 * vw,
  },
  commentCountText: {
    fontSize: 1.75 * vh
  },
  dotText: {
    marginHorizontal: 1 * vw,
  },
  likeLabelRow: {
    borderTopColor: theme.colors.gray3,
    // borderBottomColor: theme.colors.gray3,
    // borderBottomWidth: 0.07 * vh,
    borderTopWidth: 0.07 * vh,
    marginTop: 1.5 * vh,
    paddingVertical: 1.3 * vh,
    justifyContent: "space-around"
  },
  likeIcon: {
    width: 2 * vh,
    height: 2 * vh,
    resizeMode: 'contain',
    marginRight: 2 * vw,
  },
  postRow: {
    flexDirection: "row",
    alignItems: "center",
    width: 100 * vw,
    marginTop: 2 * vh,
    borderBottomWidth: 1.3 * vh,
    borderBottomColor: theme.colors.black1,
    paddingBottom: 1.5 * vh

  },
  addCommentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 1 * vh,
    paddingBottom: 1.5 * vh,

  },
  userImageComment: {
    width: 5.5 * vh,
    height: 5.5 * vh,
    resizeMode: "cover",
    borderRadius: 5.5 / 2 * vh,
    marginRight: 4 * vw,
  },
  commentRow: {
    paddingTop: 1.7 * vh,
    alignItems: "flex-start",
    flexDirection: "row",
    borderTopColor: theme.colors.gray3,
    borderTopWidth: 0.07 * vh,
  },
  shareInput: {
    width: 78 * vw,
    height: 5.8 * vh,
    marginBottom: 0,
    borderRadius: 4 * vh
  },
  commentTextView: {
    backgroundColor: theme.colors.black1,
    paddingHorizontal: 3 * vw,
    paddingVertical: 1 * vh,
    width: 78 * vw,
    borderRadius: 2 * vw,
  },
  commentText: {
    fontSize: 1.7 * vh
  },
  commentTitle: {
    marginBottom: 0.2 * vh
  },
  postImage: {
    width: "100%",
    marginVertical: 1.7 * vh,
    height: 19 * vh,
    borderRadius: 1 * vw,
  },
  postImage2: {
    borderRadius: 1 * vw,
    width: 46 * vw,
    height: 18 * vh,
    marginRight: 1 * vw,
    marginBottom: 1.7 * vh
  },
  blurView3: {
    backgroundColor: "#24242491",
    width: 92 * vw,
    height: 18 * vh,
    borderRadius: 1 * vw,
    alignItems: "center",
    justifyContent: "center"
  },
  multipleImagesRow: {
    flex: 1,
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
  sponsoredImageView: {
    width: 94 * vw,
    height: 17 * vh,
    marginTop: 1.7 * vh

  },
  sponsoredImage: {
    width: 94 * vw,
    height: 17 * vh,
    borderTopLeftRadius: 1 * vw,
    borderTopRightRadius: 1 * vw

  },
  gradient: {
    width: 94 * vw,
    height: 17 * vh,
    borderTopLeftRadius: 1 * vw,
    borderTopRightRadius: 1 * vw,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2 * vw,
    paddingTop: 2 * vh
  },
  roomsBox: {
    alignItems: "center"
  },
  sposoredContentRow: {
    width: 94 * vw,
    marginBottom: 1.7 * vh,
    backgroundColor: theme.colors.black1,
    borderBottomLeftRadius: 1 * vw,
    borderBottomRightRadius: 1 * vw,
    paddingVertical: 1 * vh,
    paddingHorizontal: 4 * vw,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sponsorTitle: {
    fontSize: 1.45 * vh,
    color: theme.colors.gray3
  },
  planText: {
    color: theme.colors.white,
    fontSize: 1.7 * vh

  },
  learnBtn: {
    width: 32 * vw,
    height: 4.6 * vh,
    paddingHorizontal: 4 * vw,
    borderRadius: 1.7 * vw,
    backgroundColor: "transparent",
    borderColor: theme.colors.primaryColor,
    borderWidth: 0.2 * vh
  },
  learnBtnLabel: {
    color: theme.colors.primaryColor
  },
  roomText: {
    color: theme.colors.black1,
    fontSize: 1.9 * vh
  },
  planDesc: {
    fontSize: 1.5 * vh,
    color: theme.colors.black1,
  },
  callTitle: {
    fontSize: 1.6 * vh
  },
  callNumber: {
    fontSize: 1.45 * vh

  },
  planLabelTitle: {
    backgroundColor: theme.colors.white,
    paddingVertical: 0.8 * vh,
    paddingHorizontal: 2 * vw,
    borderRadius: 1 * vw,
  },
  planLabelText: {
    color: theme.colors.green1,
    fontSize: 1.3 * vh
  },
  postTextView: {
    marginVertical: 1.7 * vh,
  },
  seeMoreText: {
    fontSize: 1.6 * vh,
    color: theme.colors.gray3,
    marginTop: 0.4 * vh,
    width: 35 * vw,
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

});
export default styles;
