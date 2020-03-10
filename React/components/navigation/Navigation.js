import {
    DrawerContentComponentProps,
    DrawerItem,
    DrawerNavigationProp,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Home from '../screen/Home';
import { useSafeArea } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function CustomDrawerContent({ drawerPosition, navigation }): ReactElement {
    const insets = useSafeArea();

    return (
        <ScrollView
            contentContainerStyle={[
                {
                    paddingTop: insets.top + 4,
                    paddingLeft: drawerPosition === 'left' ? insets.left : 0,
                    paddingRight: drawerPosition === 'right' ? insets.right : 0,
                },
            ]}
            style={styles.container}
        >
            <DrawerItem
                label="Screen1"
                onPress={(): void => {
                    navigation.navigate('Home');
                }}
            />
            {/*<DrawerItem*/}
            {/*    label="Screen2"*/}
            {/*    onPress={(): void => {*/}
            {/*        navigation.navigate('DrawerScreen2');*/}
            {/*    }}*/}
            {/*/>*/}
            <DrawerItem
                label="Close"
                onPress={(): void => {
                    navigation.closeDrawer();
                }}
            />
        </ScrollView>
    );
}

function Navigator(): ReactElement {
    return (
        <Drawer.Navigator
            drawerContent={(props: DrawerContentComponentProps): ReactElement => (
                <CustomDrawerContent {...props} />
            )}
        >
            <Drawer.Screen name="Home" component={Home} />
            {/*<Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />*/}
        </Drawer.Navigator>
    );
}

export default Navigator;