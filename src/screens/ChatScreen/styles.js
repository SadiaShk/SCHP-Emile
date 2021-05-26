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
    flatlist: {
        paddingTop: 3 * vh
    },
    fullWidthRow: {
        width: 92 * vw,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2 * vh
    },
    userImage: {
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh,
        marginRight: 4 * vw
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
        borderRadius: 5.7 / 2 * vh,
        paddingHorizontal: 3 * vw,
        alignItems: "center",
        flexDirection: "row"
    },
    input: {
        width: 65 * vw,
        fontSize: 1.75 * vh
    },
    sentImg: {
        width: 2.3 * vh,
        height: 2.3 * vh,
        resizeMode: "contain",
        marginLeft: 2 * vw,
    }
})