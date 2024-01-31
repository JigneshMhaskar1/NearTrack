import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native'
import { Colors, ScreenNames } from '../global';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { CHANGE_BY_MOBILE_DPI } from '../global/constant';
import NearTrackSvg from '../assets/svgs/logo.svg'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
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
