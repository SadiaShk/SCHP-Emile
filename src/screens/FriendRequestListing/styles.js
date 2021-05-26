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
        paddingVertical: 2 * vh,
        paddingHorizontal: 4 * vw,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,

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
    }
})