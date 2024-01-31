import { StyleSheet } from "react-native";
import { Colors, Constant, Fonts } from "../../global";
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";


//global

const HEIGHT = 50;
const SPACING = 20;
const RADIUS = 20;

export const styles = StyleSheet.create({
    con: {
        backgroundColor: Colors.WHITE,
        bottom: Constant.CHANGE_BY_MOBILE_DPI(0),
        width: Constant.SCREEN_WIDTH
    },
    tabBarCon: {
        flexDirection: 'row',
        height: Constant.CHANGE_BY_MOBILE_DPI(70)

    },
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancerTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatTab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    names: {
        fontSize: Constant.CHANGE_BY_MOBILE_DPI(10),
        fontFamily: Fonts.AXIFORMA_BOLD,
        includeFontPadding: false,
        marginTop: CHANGE_BY_MOBILE_DPI(5)
    },
    cardComponentStyle: {
        height: 120,
        width:Constant.SCREEN_WIDTH,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'white',
        // marginHorizontal:CHANGE_BY_MOBILE_DPI(20),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
    }
});