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

    },
    headerTitle: {
        fontSize: 2.1 * vh
    },
    sectionTitle: {
        fontSize: 2 * vh,
        marginBottom: 1.7 * vh
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
        borderTopWidth: 0.04 * vh,
        borderTopColor: theme.colors.gray3,
        paddingTop: 2 * vh
    },
    expandedRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    seeAllText: {
        fontSize: 1.7 * vh,
        color: theme.colors.primaryColor,
        textDecorationLine: "underline"
    }

})