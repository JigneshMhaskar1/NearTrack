import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTab';
import {ScreenNames} from '../../global';
import HomeStack from '../BottomStack/HomeStack';
import ProfileStack from '../BottomStack/ProfileStack';
import SearchStack from '../BottomStack/SearchStack';
import MyListStack from '../BottomStack/MyListStack';

const BottomTabs = ({userType}) => {
  const Tab = createBottomTabNavigator();
  const renderCustomBottomTab = props => {
    return <CustomBottomTab {...props} userType={userType} />;
  };
  return (
    <Tab.Navigator
      tabBar={renderCustomBottomTab}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={ScreenNames.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={ScreenNames.SEARCH_STACK} component={SearchStack} />
      <Tab.Screen name={ScreenNames.MYLIST_STACK} component={MyListStack} />
      <Tab.Screen name={ScreenNames.PROFILE_STACK} component={ProfileStack} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
