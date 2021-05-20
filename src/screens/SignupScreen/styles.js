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
        height: 36 * vh

    },
    shapeImage: {
        position: "absolute",
        width: 100 * vw,
        height: 70 * vh,
        top: -20 * vh
    },
    welcomeText: {
        fontSize: 2.9 * vh
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
        flex: 1,
        paddingBottom: 4 * vh,
        alignItems: "center"
    },
    sloganText: {
        fontSize: 1.76 * vh,
        marginTop: 1 * vh,
        marginBottom: 7 * vh
    },
    inputField: {
        // marginTop: 1.6 * vh
    },
    forgotRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 3 * vh,
        width: "100%"
    },
    forgotText: {
        color: theme.colors.primaryColor,
        fontSize: 1.8 * vh,
        textDecorationLine: "underline"
    },
    signinBtn: {
        marginBottom: 2 * vh,
        marginTop: 4 * vh
    },
    continueBtn: {
        marginBottom: 2 * vh,
        marginTop: 1 * vh
    },
    accountText: {
        fontSize: 1.8 * vh
    },
    accountSignupText: {
        color: theme.colors.primaryColor
    },
    signupRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    authenticationStep: {
        marginTop: 10 * vh
    },
    backBtn: {
        width: 2.4 * vh,
        height: 2.4 * vh,
        resizeMode: "contain"
    },

    signupRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    loginRow: {
        alignItems: "center"
    },
    accountText: {
        fontSize: 1.8 * vh,
        marginLeft: 2 * vw,
    },
})