// Navigation/DrawerNavigation.js
import { createStackNavigator, createAppContainer} from 'react-navigation';
import React, { ReactElement } from 'react';
import NavigationContainer from "@react-navigation/native/lib/commonjs/NavigationContainer";
import ItemCase from "../Flatlist/ItemCase";



const Stack = createStackNavigator({
    ItemCase: {
        screen: ItemCase,
        navigationOptions: {
            title: "List Cars"
        }
    }
});



export default createAppContainer(Stack);

// function MyDrawer() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Notifications" component={Notifications} />
//                 <Stack.Screen name="Profile" component={Profile} />
//                 <Stack.Screen name="Settings" component={Settings} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
// export default MyDrawer