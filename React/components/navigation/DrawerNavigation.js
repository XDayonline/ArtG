// Navigation/DrawerNavigation.js

import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import BrandCatalog from "../Flatlist/BrandCatalog";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";
import CarsCatalog from "../Flatlist/CarsCatalog";
import Cart from "../Flatlist/Cart";
import Logout from "../Logout";
import Login from "../Login";
import {Alert, AsyncStorage} from "react-native";



const Drawer = createDrawerNavigator();

function MyDrawer() {
    // const displayLogin = async () => {
    //     await  fetch('https://artgback.herokuapp.com/api/login', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     try {
    //      await AsyncStorage.getItem("token");
    //     }catch (error) {
    //         console.log('AsyncStorage error: ' + error.message);
    //     }
    // }
    // console.log(AsyncStorage.getItem("token"))
    return (
        <NavigationContainer>
            <Drawer.Navigator
            initialRouteName="Login"
            drawerPosition="right"
            // drawerStyle={{
            //     backgroundColor: 'black',
            //     color:"white"
            // }}
            drawerContentOptions={{
                activeTintColor: 'black',
            }}>
                <Drawer.Screen name="Home" component={Homepage}/>
                {/*{AsyncStorage.getItem("token")!== null  ? (*/}
                {/*    <Drawer.Screen name="Login" component={Login}/>*/}
                {/*): (*/}
                {/*    <Drawer.Screen name="Logout" component={Logout}/>*/}
                {/*)}*/}
                <Drawer.Screen name="Logout" component={Logout}/>
                <Drawer.Screen name="Brand" component={BrandCatalog}/>
                <Drawer.Screen name="Cars" component={CarsCatalog}/>
                <Drawer.Screen name="Cart" component={Cart}/>
                <Drawer.Screen name="Login" component={Login}/>
            </Drawer.Navigator>
        </NavigationContainer>

    );
}
export default MyDrawer