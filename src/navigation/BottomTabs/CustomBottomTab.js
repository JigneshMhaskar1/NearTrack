import React from 'react';
import { Animated, Platform, Text, TouchableOpacity, View, } from 'react-native';
//insets
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//styles
import { styles } from './styles';
//svgs
import { Colors, Constant } from '../../global/index';
import HomeFillSvg from '../../assets/svgs/bottomTabSvg/HomeFillSvg.svg'
import HomeSvg from '../../assets/svgs/bottomTabSvg/HomeUnfillSvg.svg'
import FindFillSvg from '../../assets/svgs/bottomTabSvg/SearchFillSvg.svg'
import FindSvg from '../../assets/svgs/bottomTabSvg/SearchUnfillSvg.svg'
import MyListFillSvg from '../../assets/svgs/bottomTabSvg/ListFillSvg.svg'
import MyListSvg from '../../assets/svgs/bottomTabSvg/ListUnFillSvg.svg'
import AccountFillSvg from '../../assets/svgs/bottomTabSvg/ProfileFillSvg.svg'
import AccountSvg from '../../assets/svgs/bottomTabSvg/ProfileUnFillSvg.svg'
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
//components


const CustomBottomTab = ({ state, descriptors, navigation, userType }) => {

    const insets = useSafeAreaInsets();
    const isIOS = Platform.OS === 'ios';
    const names = ["Home", "Find", "My List", "Account"];
    const svgs = [
        <HomeFillSvg heigth={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <FindFillSvg heigth={CHANGE_BY_MOBILE_DPI(18)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <MyListFillSvg heigth={CHANGE_BY_MOBILE_DPI(13)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <AccountFillSvg heigth={CHANGE_BY_MOBILE_DPI(18)} width={CHANGE_BY_MOBILE_DPI(16)} />
    ]
    const blurredSvg = [
        <HomeSvg heigth={CHANGE_BY_MOBILE_DPI(20)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <FindSvg heigth={CHANGE_BY_MOBILE_DPI(18)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <MyListSvg heigth={CHANGE_BY_MOBILE_DPI(13)} width={CHANGE_BY_MOBILE_DPI(18)} />,
        <AccountSvg heigth={CHANGE_BY_MOBILE_DPI(18)} width={CHANGE_BY_MOBILE_DPI(16)} />
    ]
    const stylesToBeApplied = [styles.home, styles.cancerTab, styles.chatTab, styles.chatTab];
    return (
        <View style={[styles.con, { position: 'absolute' }]}>
            <View style={styles.tabBarCon}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        return (
                            <TouchableOpacity
                                key={`bottomtabs-${index}`} activeOpacity={1} onPress={onPress} style={stylesToBeApplied[index]}>
                                <Animated.View>
                                    {
                                        isFocused
                                            ?
                                            svgs[index]
                                            :
                                            blurredSvg[index]
                                    }
                                </Animated.View>
                                <Text style={{ ...styles.names, color: isFocused ? Colors.PRIMARY : Colors.BLACK }}>
                                    {names[index]}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }

            </View>
        </View>
    );
};

export default CustomBottomTab;