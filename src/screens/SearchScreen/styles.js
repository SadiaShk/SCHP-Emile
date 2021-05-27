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
    profileInfo: {
        width: 100 * vw,
        marginTop: 3 * vh,
        paddingBottom: 2.8 * vh,
        paddingHorizontal: 4 * vw,
        alignItems: "center"

    },
    requestTab: {
        height: 6.2 * vh,
        backgroundColor: theme.colors.darkPurple,
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,
    },
    tabView: {
        overflow: "hidden",

        backgroundColor: theme.colors.gray,

    },
    tabButton: {
        width: 50 * vw,
        height: 6.2 * vh,
        justifyContent: "center",
        alignItems: "center"
    },
    tabTitle: {
        fontSize: 2.1 * vh
    },
    indicatorStyle: {
        color: theme.colors.primaryColor,
        width: 20 * vw,
    },
    indicatorContainerStyle: {
        color: theme.colors.primaryColor,
        width: 20 * vw,
        height: 1 * vh
    },
    underline: {
        backgroundColor: theme.colors.primaryColor,
        width: 12 * vw,
        height: 0.25 * vh,
        bottom: 0 * vh,
        position: "absolute"
    }

})