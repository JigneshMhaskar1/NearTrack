import * as React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../global';

const FocusAwareStatusBar = ({
  barColor = Colors.BLACK,
  barStyle = 'default',
  isLightBar = false,
  isTopSpace = true,
}) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const isAndroid = Platform.OS === 'android';
  return isAndroid ? (
    isFocused ? (
      <>
        <StatusBar
          backgroundColor={!isTopSpace ? '#00000000' : barColor}
          translucent={true}
          barStyle={isLightBar ? 'light-content' : 'dark-content'}
        />
        <View style={{height: isTopSpace ? StatusBar.currentHeight : 0}} />
      </>
    ) : (
      <View style={{height: StatusBar.currentHeight}} />
    )
  ) : (
    // null
    <View
      style={{
        paddingTop: isTopSpace ? insets.top : 0,
        backgroundColor: !isTopSpace ? '#00000000' : barColor,
      }}>
      <StatusBar
        backgroundColor={!isTopSpace ? '#00000000' : barColor}
        transculent={true}
        barStyle={isLightBar ? 'light-content' : 'dark-content'}
      />
    </View>
  );
};

export default React.memo(FocusAwareStatusBar);
