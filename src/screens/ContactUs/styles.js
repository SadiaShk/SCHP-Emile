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
        marginTop: 3 * vh
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
    inputField: {
        borderRadius: 3 * vh
    },
    messageInputField: {
        paddingTop: 1.6 * vh,
        borderRadius: 3 * vh

    },
    inputLabelContainer: {
        marginLeft: 3 * vw
    },
    sendBtn: {
        height: 5.6 * vh,
        borderRadius: 1.8 * vw,
        marginTop: 4 * vh
    }
})