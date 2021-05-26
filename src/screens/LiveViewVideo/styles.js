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
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 4 * vw,
        paddingTop: 8 * vh,
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
    expandedRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    arrowImage: {
        width: 2.7 * vh,
        height: 2.7 * vh,
        resizeMode: "contain",
        marginRight: 3 * vw,
    },
    headerRightView: {
        width: 2.7 * vh,
        marginRight: 3 * vw,
    },
    headerTitle: {
        fontSize: 1.8 * vh
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
    },
    liveLabelBox: {
        backgroundColor: theme.colors.lightRed,
        height: 4 * vh,
        width: 13 * vw,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1 * vw,
        marginRight: 2 * vw,
    },
    viewLabelBox: {
        backgroundColor: theme.colors.black1,
        height: 4 * vh,
        width: 13 * vw,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 1 * vw,
        marginRight: 2 * vw,
    },
    eyeIcon: {
        tintColor: theme.colors.white,
        width: 1.8 * vh,
        height: 1.8 * vh,
        resizeMode: "contain",
        marginRight: 1 * vw,
    }

})