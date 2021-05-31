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
        paddingTop: 3 * vh,
        paddingBottom: 3 * vh
    },
    headerRow: {
        paddingVertical: 2 * vh,
        paddingHorizontal: 4 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 100 * vw,
        top: 5 * vh,
        left: 0 * vw,
        position: "absolute"

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
    inputField: {
        borderRadius: 3 * vh
    },
    flatlistContainer: {
        marginTop: 2 * vh,
    },
    flatlist: {
        // height: 48 * vh

    },
    imageView: {
        width: 100 * vw,
        height: 100 * vh,
        alignItems: "center",
        justifyContent: "center"
    },
    verticalDots: {
        width: 2.5 * vh,
        height: 2.5 * vh,
        resizeMode: "contain",
        tintColor: theme.colors.white
    },
    playBtn: {
        width: 7 * vh,
        height: 7 * vh,
        borderRadius: 7 / 2 * vh,
        backgroundColor: theme.colors.lightPurple,
        alignItems: "center",
        justifyContent: "center"
    },
    playIcon: {
        width: 2.5 * vh,
        height: 2.5 * vh,
        marginLeft: 1 * vw,
    },
    descView: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        width: 100 * vw,
        minHeight: 26 * vh,
        borderTopLeftRadius: 3 * vw,
        borderTopRightRadius: 3 * vw,
        paddingVertical: 3 * vh,
        paddingHorizontal: 4 * vw,
    },
    titleText: {
        fontSize: 1.85 * vh,
        marginBottom: 1 * vh

    },
    descText: {
        fontSize: 1.75 * vh,

    }

})