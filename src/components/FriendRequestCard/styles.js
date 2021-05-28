import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import { Fonts } from "../../assets/fonts";
import theme from "../../utils/units/theme";
import vw from "../../utils/units/vw";

export default style = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        width: 92 * vw,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 1.6 * vh,
        marginBottom: 1.8 * vh
    },
    userImage: {
        width: 5.6 * vh,
        height: 5.6 * vh,
        borderRadius: 6 / 2 * vh,
        marginRight: 4 * vw
    },
    userImage2: {
        width: 5.4 * vh,
        height: 5.4 * vh,
        borderRadius: 5.4 / 2 * vh,
        marginRight: 4 * vw
    },
    descText: {
        fontSize: 1.75 * vh,
        width: 77 * vw,
    },
    userNameText: {
        fontSize: 1.75 * vh,
    },
    numberText: {
        fontSize: 1.65 * vh,

    },
    expandedRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 77 * vw,

    },
    timeText: {
        fontSize: 1.45 * vh,
        color: theme.colors.gray3,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 0.7 * vh
    },
    rowstyle: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerStyle2: {
        justifyContent: "space-between",
        marginBottom: 1.5 * vh, paddingBottom: 0
    },
    confirmBtn: {
        width: 26 * vw,
        height: 4 * vh,
        paddingHorizontal: 2 * vw,
        borderRadius: 1.5 * vw,
        marginRight: 2 * vw,
    },
    removeBtn: {
        width: 24 * vw,
        height: 4 * vh,
        paddingHorizontal: 2 * vw,
        borderRadius: 1.5 * vw,
        marginRight: 2 * vw,
    },
    deleteBtn: {
        width: 26 * vw,
        height: 4 * vh,
        paddingHorizontal: 2 * vw,
        borderRadius: 1.5 * vw,
        marginRight: 2 * vw,
        backgroundColor: theme.colors.black1
    },
    checkbox: {
        width: 2 * vh,
        height: 2 * vh,
        resizeMode: "contain"
    }
})