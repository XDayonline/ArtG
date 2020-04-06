import React, { ReactElement } from 'react';
import Homepage from "../Homepage";
import Login from "../Login";
import BrandCatalog from "../BrandCatalog";
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";
import { createStackNavigator } from '@react-navigation/stack';
import ItemCatalog from "../ItemCatalog";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homepage} />
                <Stack.Screen name="Item" component={ItemCatalog} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MyStack