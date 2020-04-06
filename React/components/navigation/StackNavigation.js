import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemCase from "../Flatlist/CarsData";
import DrawerNavigation from "../navigation/DrawerNavigation";
import React from "react";
import BrandCase from "../Flatlist/BrandItem";
import Cart from "../Flatlist/Cart";


const Stack = createStackNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name=" " component={DrawerNavigation} />
                {/*<Stack.Screen name="Cars" component={ItemCase} />*/}
                <Stack.Screen name="Brand" component={BrandCase} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer