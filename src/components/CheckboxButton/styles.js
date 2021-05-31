import { StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";
import theme from "../../utils/units/theme";


export default style = StyleSheet.create({
    checkBoxConatiner: {
        // width:90*vw,
        paddingRight: 2 * vw,
        marginBottom: 2 * vh,
        flexDirection: "row",
        alignItems: "flex-start",
        // marginVertical:1*vh,
    },
    checkboxStyle: {
        // elevation:3,
        width: 2 * vh,
        height: 2 * vh,
        resizeMode: "contain",
        marginRight: 4 * vw,
        tintColor: theme.colors.white,
        ...Platform.select({
            android: {
                marginTop: 0.35 * vh
            },
            ios: {
                marginTop: 0.35 * vh
            }
        })
    },
    checkboxText: {
        width: 81 * vw,
        color: theme.colors.gray6,
        fontSize: 1.8 * vh,
        padding: 0,
    }
})