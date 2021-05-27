import { StyleSheet, Platform, View } from "react-native";

import theme from '../../utils/units/theme'
import fonts, { Fonts } from '../../assets/fonts'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: theme.colors.darkPurple,
        paddingTop: 3 * vh,
        paddingHorizontal: 4 * vw

    },
    titleSearch: {
        fontSize: 1.65 * vh,
        marginBottom: 2 * vh
    },
    noResultText: {
        fontSize: 3 * vh,
        color: theme.colors.primaryColor,
        alignSelf: "center",
        marginTop: 24 * vh
    }
})