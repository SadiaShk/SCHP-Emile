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
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh,
        marginRight: 4 * vw
    },
    descText: {
        fontSize: 1.75 * vh,
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
    confirmBtn: {
        width: 26 * vw,
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
    }
})