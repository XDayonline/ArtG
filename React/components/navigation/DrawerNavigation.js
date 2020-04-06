// Navigation/DrawerNavigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import Login from "../Login";
import BrandCatalog from "../Flatlist/BrandCatalog";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";
import ItemCatalog from "../Flatlist/ItemCatalog";
import Cart from "../Flatlist/Cart";
import StackNavigation from "../navigation/StackNavigation";



const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (

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
                <Drawer.Screen name="Catalog" component={BrandCatalog}/>
                <Drawer.Screen name="Item" component={ItemCatalog}/>
                <Drawer.Screen name="Cart" component={Cart}/>
            </Drawer.Navigator>

    );
}
export default MyDrawer