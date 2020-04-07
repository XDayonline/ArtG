import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from "../navigation/DrawerNavigation";
import React from "react";
import Cart from "../Flatlist/Cart";
import BrandCatalog from "../Flatlist/BrandCatalog";
import CarsCatalog from "../Flatlist/CarsCatalog";


const Stack = createStackNavigator();

function MyDrawer() {
    return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Brand" component={BrandCatalog} />
                <Stack.Screen name="Cars" component={CarsCatalog} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
    );
}
export default MyDrawer