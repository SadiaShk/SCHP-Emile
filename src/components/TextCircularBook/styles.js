import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import { Fonts } from "../../assets/fonts";
import theme from "../../utils/units/theme";

export default style = StyleSheet.create({
    text: {
        fontSize: 2.5 * vh,
        fontFamily: Fonts.CBK,
        color: theme.colors.white,
        padding: 0,
        margin: 0,
        ...Platform.select({
            android: {
                paddingBottom: 0.2 * vh
            }
        })
    }
})