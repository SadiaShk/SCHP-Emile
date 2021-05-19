import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";
import theme from "../../utils/units/theme";


export default style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 92 * vw,
        height: 6.8 * vh,
        backgroundColor: theme.colors.primaryColor,
        elevation: 2,
        shadowColor: theme.colors.primaryColor,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4 * vw,
        padding: 0,
        borderRadius: 1.2 * vw,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        resizeMode: 'contain',
        height: 2 * vh,
        width: 2 * vh,
        marginLeft: 5 * vw
    },
    lefticon: {
        resizeMode: 'contain',
        height: 2 * vh,
        width: 2 * vh,
        marginRight: 5 * vw
    },
    text: {
        marginTop: 0.4 * vh,
        fontSize: theme.fontSizes.desctfour,
        color: theme.colors.white
    },

})