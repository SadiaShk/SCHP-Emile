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
    headerRow: {
        paddingVertical: 1.7 * vh,
        paddingHorizontal: 4 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,
        marginBottom: 2 * vh

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
    postBtn: {
        width: 22 * vw,
        height: 4.6 * vh,
        borderRadius: 1.5 * vw,
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
    },
    sectionBorder: {
        borderBottomColor: theme.colors.black1,
        borderBottomWidth: 1.3 * vh,
        paddingBottom: 1 * vh
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
    infoRow: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 1.7 * vh
    },
    infoIcon: {
        width: 2.1 * vh,
        height: 2.1 * vh,
        tintColor: theme.colors.white,
        resizeMode: "contain",
        marginRight: 3 * vw,
        marginTop: 0.3 * vh
    },
    infoText: {
        fontSize: 1.85 * vh,
    },
    infoSection: {
        paddingTop: 2 * vh
    },
    friendSection: {
        paddingTop: 2.6 * vh
    },
    moreBtn: {
        marginTop: 2 * vh,
        marginBottom: 4 * vh,
        height: 5 * vh,
        width: 86 * vw,
        borderRadius: 1.5 * vw,

        alignSelf: "center",
        backgroundColor: theme.colors.black1
    }

})