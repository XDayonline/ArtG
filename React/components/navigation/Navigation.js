// Navigation/Navigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import Login from "../Login";
import {createAppContainer} from "react-navigation";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Homepage}/>
                <Drawer.Screen name="Login" component={Login}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer