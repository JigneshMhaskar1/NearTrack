import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Constant, ScreenNames } from '../../global';
import BottomTabs from '../BottomTabs/BottomTabs';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
export default function DrawerTab() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: Constant.SCREEN_WIDTH / 1.35,
                },
            }} initialRouteName={ScreenNames.BOTTOM_TAB}>
            <Drawer.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}