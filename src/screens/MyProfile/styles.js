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
    profileInfo: {
        width: 100 * vw,
        marginTop: 3 * vh,
        paddingBottom: 2 * vh,
        paddingHorizontal: 4 * vw,
        alignItems: "center"

    },
    coverImageView: {
        width: 92 * vw,
        height: 18 * vh,
        marginBottom: 7 * vh

    },
    coverImage: {
        width: 92 * vw,
        height: 18 * vh,
        borderRadius: 2 * vw
    },
    cameraBtn: {
        backgroundColor: theme.colors.white,
        width: 3.2 * vh,
        height: 3.2 * vh,
        borderRadius: 3.2 / 2 * vh,
        position: "absolute",
        bottom: 1 * vh,
        right: 4 * vw,
        alignItems: "center",
        justifyContent: "center"
    },
    cameraIcon: {
        width: 1.6 * vh,
        height: 1.6 * vh,
        tintColor: theme.colors.primaryColor,
        resizeMode: "contain"
    },
    infoRow: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 1.7 * vh
    },
    infoIcon: {
        width: 2.1 * vh,
        height: 2.1 * vh,
        tintColor: theme.colors.white,
        resizeMode: "contain",
        marginRight: 3 * vw,
        marginTop: 0.3 * vh
    },
    infoText: {
        fontSize: 1.85 * vh,
    },
    userImageContainer: {
        position: "absolute",
        top: 10 * vh,
        left: 36 * vw,
    },
    userImageBorder: {
        width: 13 * vh,
        height: 13 * vh,
        borderRadius: 13 / 2 * vh,
        borderColor: theme.colors.black1,
        borderWidth: 0.8 * vh,
        alignItems: "center",
        justifyContent: "center",

    },
    userProfileImage: {
        width: 11.6 * vh,
        height: 11.6 * vh,
        borderRadius: 13 / 2 * vh,
    },
    userProfileName: {
        fontSize: 2.2 * vh,
        marginBottom: 1.9 * vh

    },
    profileOptionsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 4 * vw,
        width: 100 * vw,
        borderTopWidth: 1.3 * vh,
        borderTopColor: theme.colors.black1,
        paddingVertical: 2 * vh
    },
    profileOptionsBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 29 * vw,
        height: 4.7 * vh,
        backgroundColor: theme.colors.black1,
        borderRadius: 4 * vh,
        paddingHorizontal: 4 * vw,
    },
    postRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 4 * vw,
        width: 100 * vw,
        borderTopWidth: 1.3 * vh,
        borderTopColor: theme.colors.black1,
        paddingVertical: 1.7 * vh
    },
    photosIcon: {
        width: 2.2 * vh,
        height: 2.2 * vh,
        resizeMode: "contain",
        tintColor: theme.colors.gray3
    },
    optionBtnLabel: {
        fontSize: 1.8 * vh,
        color: theme.colors.gray3
    },
    userImage: {
        width: 5.8 * vh,
        height: 5.8 * vh,
        resizeMode: "cover",
        borderRadius: 5.8 / 2 * vh,
        marginRight: 4 * vw,
    },
    shareInput: {
        width: 76 * vw,
        height: 5.8 * vh,
        marginBottom: 0,
        borderRadius: 4 * vh
    }

})