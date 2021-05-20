import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";

export default styles = StyleSheet.create({
    icon: {
        height: 2.5 * vh,
        width: 2.5 * vh,

        resizeMode: 'contain',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2 * vw,
        shadowColor: theme.colors.primaryColor,
    },
    container: {
        height: 3.5 * vh,
        width: 3.5 * vh,
        borderRadius: 3.5 / 2 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerGradient: {
        height: 3.5 * vh,
        width: 3.5 * vh,
        borderRadius: 3.5 / 2 * vh,
        justifyContent: 'center',
        alignItems: "center",

    },
})