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
        paddingBottom: 3 * vh,
        paddingTop: 3 * vh
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
    participantsName: {
        fontSize: 1.45 * vh,
        color: theme.colors.gray5,
        width: 45 * vw,
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
        marginTop: 3 * vh,
    },
    flatlist: {
        // height: 48 * vh

    },
    nextBtn: {
        width: 28 * vw,
        height: 4.8 * vh,
        paddingHorizontal: 2 * vw,
        borderRadius: 1.6 * vw,
        marginRight: 3 * vw,
    },
    trashBtn: {
        width: 10 * vw,
        height: 4.8 * vh,
        backgroundColor: theme.colors.black1,
        borderRadius: 1.6 * vw,
        alignItems: "center",
        justifyContent: "center"
    },
    trashIcon: {
        width: 1.9 * vh,
        height: 1.9 * vh,
        resizeMode: "contain"
    },
    leaveBtn: {
        width: 90 * vw,
        height: 5.3 * vh,
        borderRadius: 1.6 * vw,
        marginBottom: 2 * vh
    }

})