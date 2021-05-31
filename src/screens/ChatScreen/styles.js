import { StyleSheet, Platform, View } from "react-native";

import theme from '../../utils/units/theme'
import fonts, { Fonts } from '../../assets/fonts'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.darkPurple,
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
    },
    headerRow: {
        paddingVertical: 2 * vh,
        paddingHorizontal: 4 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 2.1 * vh
    },
    backArrow: {
        width: 2.2 * vh,
        height: 2.2 * vh,
        resizeMode: "contain",
        marginRight: 2 * vw,
    },
    chatHeaderIcon: {
        width: 2.4 * vh,
        height: 2.4 * vh,
        resizeMode: "contain",
    },
    btnIcon: {
        marginLeft: 2 * vw,

    },
    titleView: {
        backgroundColor: theme.colors.black1,
        height: 4.1 * vh,
        paddingHorizontal: 3 * vw,
        marginLeft: 3 * vw,
        borderRadius: 3 * vh,
        alignItems: "center",
        justifyContent: "center"
    },
    textTitleItem: {
        fontSize: 1.45 * vh,
        color: theme.colors.gray3
    },
    contentContainer: {
        height: 74 * vh,
        paddingTop: 4 * vh

    },
    flatlist: {
        marginBottom: vh * 6,

    },
    fullWidthRow: {
        width: 92 * vw,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2 * vh
    },
    userImage: {
        width: 5 * vh,
        height: 5 * vh,
        borderRadius: 5 / 2 * vh,
        marginRight: 3 * vw
    },
    expandedRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 77 * vw
    },
    messageRow: {
        flexDirection: "row",
        alignItems: "center",
        width: 77 * vw,
        marginTop: 0.3 * vh
    },
    username: {
        fontSize: 1.8 * vh,
    },
    messageText: {
        fontSize: 1.6 * vh,
        width: 69 * vw,
        color: theme.colors.gray3,
        marginRight: 2 * vw,
    },
    dateText: {
        fontSize: 1.5 * vh,
        color: theme.colors.gray
    },
    msgCountBox: {
        width: 2.7 * vh,
        height: 2.7 * vh,
        backgroundColor: theme.colors.primaryColor,
        borderRadius: 3 / 2 * vh,
        alignItems: "center",
        justifyContent: "center"
    },
    activeMsgCount: {
        fontSize: 1.5 * vh,
    },
    chatBubble: {
        backgroundColor: theme.colors.white,
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh,
        position: "absolute",
        bottom: 6 * vh,
        right: 4 * vw,
        alignItems: "center",
        justifyContent: "center"
    },
    chatIcon: {
        width: 3 * vh,
        height: 3 * vh
    },
    chatBox: {
        backgroundColor: theme.colors.black1,
        width: 92 * vw,
        height: 5.7 * vh,
        marginLeft: 4 * vw,
        borderRadius: 5.7 / 2 * vh,
        paddingHorizontal: 3 * vw,
        alignItems: "center",
        flexDirection: "row"
    },
    input: {
        width: 65 * vw,
        fontSize: 1.75 * vh,
        color: theme.colors.white
    },
    sentImg: {
        width: 2.3 * vh,
        height: 2.3 * vh,
        resizeMode: "contain",
        marginLeft: 2 * vw,
    },
    own: {
        paddingHorizontal: vw * 2,
        paddingVertical: vh * 1.2,
        backgroundColor: theme.colors.primaryColor,
        borderRadius: 3 * vw,
        maxWidth: vw * 70
    },
    other: {
        paddingHorizontal: vw * 2,
        paddingVertical: vh * 1.2,
        backgroundColor: theme.colors.black1,
        borderRadius: 3 * vw,

        maxWidth: vw * 70
    },
    message: {
        fontSize: 1.7 * vh,
        // flex: 1
    },
    listHeaderView: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2 * vh
    },
    listFooterView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2 * vh
    },
    headerTimeText: {
        fontSize: 1.5 * vh,
        color: theme.colors.gray7
    },
    cheatHead: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: vh * 1,
        marginBottom: 1 * vh
    },
    messageBoxPosition: {
        position: "absolute",
        bottom: 2 * vh,
    },
    timeText: {
        fontSize: 1.8 * vh,
        marginBottom: 1.3 * vh,
        marginTop: 0.3 * vh,
        alignSelf: "center"
    }
})