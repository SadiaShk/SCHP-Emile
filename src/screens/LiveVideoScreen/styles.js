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
        paddingVertical: 1.7 * vh,
        paddingHorizontal: 4 * vw,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    headerTitle: {
        fontSize: 2.1 * vh
    },
    newBtn: {
        width: 20 * vw,
        height: 4.6 * vh,
        paddingHorizontal: 2 * vw,
        borderRadius: 1.5 * vw
    },
    sectionContainer: {
        borderTopWidth: 1.3 * vh,
        borderTopColor: theme.colors.black1,
    },
    sectionTitle: {
        fontSize: 2 * vh,
        marginBottom: 1.7 * vh
    },
    screenPadding: {
        paddingHorizontal: 4 * vw,
        paddingTop: 2 * vh
    },
    expandedRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    seeAllText: {
        fontSize: 1.7 * vh,
        color: theme.colors.gray5,
        textDecorationLine: "underline"
    },
    liveVideoImageView: {
        width: 34 * vw,
        height: 10.6 * vh,
        marginRight: 3 * vw,
        alignItems: "center",
        justifyContent: "center"
    },
    liveVideoImage: {
        width: 34 * vw,
        height: 10.6 * vh,
        borderRadius: 2 * vw
    },
    blurView1: {
        backgroundColor: '#00000061',
        width: 34 * vw,
        height: 10.6 * vh,
        borderRadius: 2 * vw,
        alignItems: "center",
        justifyContent: "center"
    },
    playBtn: {
        width: 4 * vh,
        height: 4 * vh,
        borderRadius: 4 / 2 * vh,
        backgroundColor: theme.colors.lightPurple,
        alignItems: "center",
        justifyContent: "center"
    },
    playIcon: {
        width: 1.7 * vh,
        height: 1.7 * vh,
        marginLeft: 1 * vw,
    },

})