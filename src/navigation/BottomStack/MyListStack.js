import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../../global';
import HomeScreen from '../../screen/HomeScreen';
enableScreens();
const Stack = createStackNavigator();
const MyListStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={ScreenNames.HOME_SCREEN}>
    <Stack.Screen name={ScreenNames.HOME_SCREEN} component={HomeScreen} />
</Stack.Navigator>
  );
};
export default MyListStack;
