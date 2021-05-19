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
    peopleBanner: {
        width: 100 * vw,
        height: 50 * vh

    },
    shapeImage: {
        position: "absolute",
        width: 100 * vw,
        height: 70 * vh
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 4 * vw,
        marginTop: 8 * vh,
        marginBottom: 3 * vh
    },
    titleText: {
        fontSize: 2.4 * vh
    },
    titleDot: {
        color: theme.colors.primaryColor,
    },
    signupText: {
        fontSize: 2.3 * vh,
        color: theme.colors.primaryColor

    },
    getStartedText: {
        fontSize: 3.9 * vh
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 5 * vh

    },
    sloganText: {
        fontSize: 1.8 * vh,
        marginTop: 1 * vh
    }

})