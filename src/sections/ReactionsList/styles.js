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
    nameText: {
        fontSize: 1.7 * vh,
        marginLeft: 3 * vw,
    },
    userImageView: {
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh
    },
    reactionRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2 * vh
    },
    reactionIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 2 * vh,
        height: 2 * vh,
        resizeMode: "contain"
    }
})