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
    bellContainer: {
        width: 5 * vh,
        height: 5 * vh,
        borderRadius: 5 / 2 * vh,
        backgroundColor: theme.colors.lightRed,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 4 * vw
    },
    bellIcon: {
        width: 3.5 * vh,
        height: 3.5 * vh,
        marginBottom: 0.7 * vh,
        marginRight: 0.4 * vh
    },
    descText: {
        fontSize: 1.75 * vh,
        width: 77 * vw,
    },
    timeText: {
        fontSize: 1.65 * vh,
        color: theme.colors.primaryColor,
        position: "absolute",
        bottom: 0,
        right: 0
    }
})