import React from "react";
import { View, Button, StyleSheet, Text, Image,TouchableHighlight } from 'react-native';
import Homepage from "./Homepage";
import Catalog from "./Catalog";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


class Menu extends React.Component {
    render() {
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Homepage} />
                    <Drawer.Screen name="Notifications" component={Catalog} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}
export default Menu

const styles = StyleSheet.create({
    content: {
        backgroundColor:'red',
        right:15
    },
    logo: {

    }
});