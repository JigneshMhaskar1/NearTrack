import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenNames} from '../global';
import SplashScreen from '../screen/SpashScreen';
import BottomTabs from './BottomTabs/BottomTabs';
import DrawerTab from './DrawerTab/DrawerTab';
enableScreens();
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenNames.SPLASH_SCREEN}>
        <Stack.Screen
          name={ScreenNames.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs} />
        <Stack.Screen name={ScreenNames.DRAWER_TAB} component={DrawerTab} />

        {/*  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
