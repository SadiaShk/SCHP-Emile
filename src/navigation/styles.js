import {
    StyleSheet
} from 'react-native'
import vw from '../utils/units/vw'
import vh from '../utils/units/vh'
import theme from '../utils/units/theme'
import fonts, { Fonts } from '../assets/fonts'
export default styles = StyleSheet.create({

    drawerStyles: { flex: 1, width: '70%', backgroundColor: '#080010' },
    drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
    drawerLabel: { color: 'white', marginLeft: -16 },
    closeIcon: {
        width: 1.7 * vh,
        height: 1.7 * vh,
        tintColor: theme.colors.white
    },
    crossIconBtn: {
        position: "absolute",
        top: 5 * vh,
        right: 5 * vw,
        width: 2.5 * vh,
        height: 2.5 * vh,
        alignItems: "center",
        justifyContent: "center"
    },
    DrawerScrollView: {
        flex: 1,
        paddingLeft: vw * 3,
    },
    optionLabel: {
        color: theme.colors.white,
        fontSize: 1.8 * vh,
        fontFamily: Fonts.RBR
    },
    optionContainer: {
        marginTop: 2 * vh,
    },
    optionImg: {
        width: 2.4 * vh,
        height: 2.2 * vh,
        resizeMode: "contain",
    },
    option: {
        justifyContent: "center",
        height: vh * 5,
        width: 60 * vw,

    },
    labelBox: {
        // flex: 1,
        width: 50 * vw,

        height: 6 * vh,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    drawerHeaderView: {
        paddingLeft: 3 * vw,
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,
        paddingBottom: 4 * vh
    },
    userImageBorder: {
        width: 6.7 * vh,
        height: 6.7 * vh,
        borderRadius: 6.7 / 2 * vh,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.2 * vh,
        borderColor: theme.colors.primaryColor
    },
    userImage: {
        width: 6 * vh,
        height: 6 * vh,
        borderRadius: 6 / 2 * vh
    },
    username: {
        fontSize: 2 * vh,
        color: theme.colors.white,

    },
    editProfileTitle: {
        fontSize: 1.74 * vh,
        width: 35 * vw,
        color: theme.colors.primaryColor,
        textDecorationLine: "underline",

    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2 * vh,
        paddingRight: 3 * vw,
    },
    statsBox: {
        width: 20 * vw,
        alignItems: 'center',
        marginTop: 2 * vh
    },
    statsLabel: {
        fontSize: 1.9 * vh,
        color: theme.colors.white,
        marginTop: 0.7 * vh,
        textAlign: "center"
    },
    statsNumberBox: {
        borderWidth: 0.3 * vh,
        borderColor: theme.colors.primaryColor,
        width: 14 * vw,
        height: 6 * vh,
        borderRadius: 3 * vw,
        alignItems: 'center',
        justifyContent: "center"
    },
    statsNumberText: {
        fontSize: 2 * vh,
        color: theme.colors.primaryColor
    },
    titleText: {
        fontSize: 2.5 * vh
    },
    titleDot: {
        color: theme.colors.primaryColor,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    tabStyle: {
        backgroundColor: theme.colors.darkPurple,
        // height: 6 * vh,
        borderBottomWidth: 0.04 * vh,
        borderBottomColor: theme.colors.gray3,

    },
    tabIcon: {
        height: 6.7 * vh,
        width: 20 * vw,

    },
    homeTab: {
        height: 6.7 * vh,
        width: 20 * vw,

    },

    indicatorStyle: {
        backgroundColor: theme.colors.primaryColor,
        width: 10 * vw,
        height: 0.4 * vh,
        marginBottom: -0.1 * vh,
        marginLeft: 5 * vw,
    },
    headerBtnView: {
        width: 4 * vh,
        height: 4 * vh,
        borderRadius: 4 / 2 * vh,
        backgroundColor: theme.colors.black1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 2.3 * vw,
    },
    headerBtnBackView: {
        width: 4 * vh,
        height: 4 * vh,
        borderRadius: 4 / 2 * vh,
        backgroundColor: theme.colors.black1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2.3 * vw,
    },
    searchIcon: {
        width: 2.2 * vh,
        height: 2.2 * vh,
        resizeMode: "contain"
    }

})