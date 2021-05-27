import { StyleSheet, Platform } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";
import theme from "../../utils/units/theme";


export default style = StyleSheet.create({
    tabButtonContainer: {
        width: 20 * vw,
        alignItems: "center",
        height: 6.7 * vh,
        justifyContent: "center"
        // borderRadius:1.5*vw,

    },
    bannerGradient: {
        height: 4 * vh,
        width: 22 * vw,
        // width: '100%',
        borderRadius: 3 * vh,
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 2 * vw,

    },
    tabButtonIcon: {
        height: 2.5 * vh,
        width: 2.5 * vh,
        resizeMode: 'contain',

    },
    titleText: {
        height: 2.4 * vh,
        fontSize: 1.2 * vh,
        color: theme.colors.lightPurple2
    },
    badgeView: {
        elevation: 2,
        shadowColor: theme.colors.graythree,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        height: 2.1 * vh,
        width: 2.1 * vh,
        borderColor: theme.colors.fontWhite,
        borderWidth: 1.9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.primaryBlue,
        position: 'absolute',
        top: 0.5 * vh,
        left: 10 * vw,
        borderRadius: 2.7 / 2 * vh,


    },
    badge: {

        color: '#fff',
        fontSize: 1.3 * vh,
        ...Platform.select({
            android: {
                marginTop: 0.5 * vh,
            },
            ios: {
                // marginTop:0.1*vh
            }
        })

    },
    tabTitle: {
        fontSize: 1.4 * vh,
        color: theme.colors.white,
        marginLeft: 1 * vw,
        textTransform: "uppercase"
    },
    underline: {
        backgroundColor: theme.colors.primaryColor,
        width: 10 * vw,
        height: 0.25 * vh,
        bottom: 0 * vh,
        position: "absolute"
    }

})