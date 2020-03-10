// Navigation/Navigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import Login from "../Login";
import Catalog from "../Catalog";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";



const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            drawerPosition="right"
            drawerStyle={{
                // backgroundColor: 'black',
            }}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                drawerLabel: { color: 'white' },
            }}>
                <Drawer.Screen name="Home" component={Homepage} options={{ drawerLabel: 'Home' , color:'white'}}/>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Catalog" component={Catalog}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer