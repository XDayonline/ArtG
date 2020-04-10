import React from "react";
import {View, Button, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


class Header extends React.Component {
    onPress =  ()  => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    };
    render() {
        return(
            <View style={styles.Header}>
                <Text style={styles.Space}/>
                <Text style={styles.Text}>ARTG</Text>
                <TouchableHighlight onPress={this.onPress} style={styles.content}>
                    <Image style={styles.logo} source={require('../assets/icon/icons8-menu-24.png')} alt="menu" />
                </TouchableHighlight>
            </View>
        )
    }
}
export default Header

const styles = StyleSheet.create({
    Header: {
        zIndex:1,
        paddingTop:50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Space: {
        width:25
    },
    Text: {
        marginLeft:10,
        color:'white'
    },
    logo: {
        marginRight: 10,
    }
});
