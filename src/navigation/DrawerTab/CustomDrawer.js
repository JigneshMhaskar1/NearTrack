//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Colors, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import NearTrackSvg from '../../assets/svgs/logo.svg'
import CrossSvg from '../../assets/svgs/CrossSvg.svg'
import FillRuppeSvg from '../../assets/svgs/FillRuppeSvg.svg'
import DropDownSvg from '../../assets/svgs/DropDown.svg'
import { STATIC_DATA } from '../../global/staticdata';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const CustomDrawer = () => {
    const navigation = useNavigation()
    const renderDrawer = ({ item, index }) => {
        const navigateTo = () => {
            if (item.navigation != '') {
                //  navigation.navigate()
            }
        }
        return (
            <View style={styles.marginContainer}>
                <TouchableOpacity onPress={navigateTo} style={styles.flexDirection}>
                    <View style={styles.widthContainer}>
                        <Text style={styles.nameFontStyle}>{item.name}</Text>
                    </View>
                    <View style={{
                        transform: [{
                            rotate: '-90deg'
                        }]
                    }}>
                        <DropDownSvg height={CHANGE_BY_MOBILE_DPI(15)} width={CHANGE_BY_MOBILE_DPI(15)} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    }

    return (
        <View style={styles.container}>
            <View style={styles.positionContainer}>
                <TouchableOpacity hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }} onPress={closeDrawer}>
                    <CrossSvg height={CHANGE_BY_MOBILE_DPI(15)} width={CHANGE_BY_MOBILE_DPI(15)} />
                </TouchableOpacity>
            </View>
            <View style={styles.alignmentCenterContainer}>
                <NearTrackSvg height={CHANGE_BY_MOBILE_DPI(67)} width={CHANGE_BY_MOBILE_DPI(187)} />
            </View>
            <View style={styles.alignmentCenterContainer}>
                <TouchableOpacity style={styles.purchaseContainer}>
                    <FillRuppeSvg height={CHANGE_BY_MOBILE_DPI(19)} width={CHANGE_BY_MOBILE_DPI(19)} />
                    <Text style={styles.myPurchaseFontStyle}>My Puchase</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.marginTopContainer}>
                <FlatList data={STATIC_DATA.drawerData} renderItem={renderDrawer} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR
    },
    positionContainer: {
        alignSelf: 'flex-end',
        marginTop: CHANGE_BY_MOBILE_DPI(70),
        marginRight: CHANGE_BY_MOBILE_DPI(20)
    },
    alignmentCenterContainer: {
        alignItems: 'center',
        marginTop: CHANGE_BY_MOBILE_DPI(35)
    },
    purchaseContainer: {
        height: CHANGE_BY_MOBILE_DPI(60),
        width: CHANGE_BY_MOBILE_DPI(220),
        borderRadius: CHANGE_BY_MOBILE_DPI(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY
    },
    myPurchaseFontStyle: {
        fontFamily: Fonts.AXIFORMA_SEMIBOLD,
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        color: Colors.WHITE,
        marginLeft: CHANGE_BY_MOBILE_DPI(7)
    },
    nameFontStyle: {
        fontFamily: Fonts.AXIFORMA_SEMIBOLD,
        fontSize: CHANGE_BY_MOBILE_DPI(18),
        color: Colors.WHITE,
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    marginContainer: {
        marginHorizontal: CHANGE_BY_MOBILE_DPI(40),
        marginBottom: CHANGE_BY_MOBILE_DPI(35)
    },
    marginTopContainer: {
        marginTop: CHANGE_BY_MOBILE_DPI(40)
    },
    widthContainer: {
        width: CHANGE_BY_MOBILE_DPI(130)
    }
});

//make this component available to the app
export default CustomDrawer;
