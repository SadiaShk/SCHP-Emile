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
    videoContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
        paddingTop: 3 * vh,
        paddingBottom: 3 * vh
    },
    btnRow: {
        paddingVertical: 2 * vh,
        paddingHorizontal: 8 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 100 * vw,
        bottom: 5 * vh,
        left: 0 * vw,
        position: "absolute"

    },
    videoCallImage: {
        width: 100 * vw,
        height: 100 * vh,
    },
    videoCallView: {
        width: 100 * vw,
        height: 100 * vh,
    },
    voiceCallView: {
        width: 100 * vw,
        height: 100 * vh,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.darkPurple
    },
    voiceCallerImage: {
        width: 22 * vh,
        height: 22 * vh,
        borderRadius: 22 / 2 * vh,
        borderWidth: 1.2 * vh,
        borderColor: theme.colors.primaryColor
    },
    lightPurpleBorder: {
        width: 24.5 * vh,
        height: 24.5 * vh,
        borderRadius: 24.5 / 2 * vh,
        borderWidth: 1.2 * vh,
        borderColor: "rgba(144,52,239,0.40)",
        alignItems: "center",
        justifyContent: "center",
    },
    lighterPurpleBorder: {
        width: 27 * vh,
        height: 27 * vh,
        borderRadius: 27 / 2 * vh,
        borderWidth: 1.2 * vh,
        borderColor: "rgba(144,52,239,0.20)",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 1.6 * vh
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
    inputField: {
        borderRadius: 3 * vh
    },
    flatlistContainer: {
        marginTop: 2 * vh,
    },
    flatlist: {
        // height: 48 * vh

    },
    userImage: {
        width: 50 * vw,
        height: 50 * vh,

    },
    verticalDots: {
        width: 2.5 * vh,
        height: 2.5 * vh,
        resizeMode: "contain",
        tintColor: theme.colors.white
    },
    playBtn: {
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh,
        backgroundColor: theme.colors.black1,
        alignItems: "center",
        justifyContent: "center"
    },
    playIcon: {
        width: 2.7 * vh,
        height: 2.7 * vh,
        resizeMode: "contain"
    },
    callerImage: {
        width: 40 * vw,
        height: 25 * vh,
        borderRadius: 3 * vw,
        bottom: 15 * vh,
        position: "absolute",
        right: 4 * vw
    },
    timerView: {
        width: "100%",
        top: 10 * vh,
        alignItems: "center",
    },
    callerName: {
        fontSize: 2.2 * vh,
    },
    timerText: {
        fontSize: 1.8 * vh
    }

})