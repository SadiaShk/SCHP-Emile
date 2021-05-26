import { StyleSheet, Platform, View } from "react-native";

import theme from '../../utils/units/theme'
import fonts, { Fonts } from '../../assets/fonts'
import vw from '../../utils/units/vw'
import vh from '../../utils/units/vh'

export default StyleSheet.create({
    imageBgView: {
        flex: 1,
        height: 100 * vh,
        width: 100 * vw

    },
    blurView: {
        height: 100 * vh,
        width: 100 * vw,
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 4 * vw,
        paddingVertical: 6 * vh,
        justifyContent: "space-between"
    },
    imageBg: {
        height: 100 * vh,
        width: 100 * vw
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    arrowImage: {
        width: 2.7 * vh,
        height: 2.7 * vh,
        resizeMode: "contain",
        marginRight: 3 * vw
    },
    headerTitle: {
        fontSize: 2.1 * vh
    },
    liveBtnView: {
        backgroundColor: theme.colors.primaryColor,
        width: 30 * vw,
        height: 4.5 * vh,
        borderRadius: 1 * vw,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 2 * vw,
        justifyContent: "center"
    },
    liveCamera: {
        width: 2 * vh,
        height: 2 * vh,
        resizeMode: "contain",
        marginRight: 3 * vw
    },
    liveText: {
        fontSize: 1.7 * vh
    },
    rowCentered: {
        alignItems: "center"
    },
    inputField: {
        borderRadius: 3 * vh,
    }

})