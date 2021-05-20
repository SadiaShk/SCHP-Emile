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
    postRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 4 * vw,
        width: 100 * vw,
        marginTop: 2 * vh,
        paddingBottom: 1.5 * vh

    },
    userImage: {
        width: 5.8 * vh,
        height: 5.8 * vh,
        resizeMode: "cover",
        borderRadius: 5.8 / 2 * vh,
        marginRight: 4 * vw,
    },
    shareInput: {
        width: 76 * vw,
        height: 5.8 * vh,
        marginBottom: 0,
        borderRadius: 4 * vh
    }

})