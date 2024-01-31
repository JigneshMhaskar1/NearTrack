import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, ScreenNames } from '../global';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
import NearTrackSvg from '../assets/svgs/logo.svg'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import HospitalSvg from '../assets/svgs/hospital-svgrepo-com.svg'
const SplashScreen = () => {
    const navigation = useNavigation()
    const DareNowOpacity = React.useRef(new Animated.Value(1)).current;
    const resetStackAndGoToBottom = CommonActions.reset({
        index: 0,
        routes: [{ name: ScreenNames.HOME_SCREEN }],
    });
    const onLoad = async () => {
        Animated.timing(DareNowOpacity, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start(async ({ finished }) => {
            if (finished) {
                navigation.dispatch(resetStackAndGoToBottom)
            }
        })
    }
    React.useEffect(() => {
        onLoad()
    }, [])
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barColor={Colors.PRIMARY} isLightBar={true} />
            <HospitalSvg style={{height:90,width:90}}/>
            <Text style={{fontSize:18,fontFamily:Fonts.AXIFORMA_BOLD,color:Colors.WHITE,marginTop:10}}>NearTrack</Text> 
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
});

//make this component available to the app
export default SplashScreen;
