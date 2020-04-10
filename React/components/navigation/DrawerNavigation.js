// Navigation/DrawerNavigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import Login from "../Login";
import BrandCatalog from "../Flatlist/BrandCatalog";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";
import CarsCatalog from "../Flatlist/CarsCatalog";
import Cart from "../Flatlist/Cart";
import StackNavigation from "../navigation/StackNavigation";



const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Screen name="Back" component={StackNavigation}/>
            <Drawer.Navigator
            initialRouteName="Home"
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
                <Drawer.Screen name="Brand" component={BrandCatalog}/>
                <Drawer.Screen name="Cars" component={CarsCatalog}/>
                <Drawer.Screen name="Cart" component={Cart}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );
}
export default MyDrawer
