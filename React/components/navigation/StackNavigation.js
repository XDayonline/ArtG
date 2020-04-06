// Navigation/DrawerNavigation.js
import { createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemCase from "../Flatlist/ItemCase";
import React from "react";
import BrandCase from "../Flatlist/BrandCase";
import Cart from "../Flatlist/Cart";



// const Stack = createStackNavigator({
//     ItemCase: {
//         screen: ItemCase,
//         navigationOptions: {
//             title: "List Cars"
//         }
//     }
// });
//
//
// export default createAppContainer(Stack)

const Stack = createStackNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="voiture" component={ItemCase} />
                <Stack.Screen name="Brand" component={BrandCase} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer