import React from "react";
import {View, Button, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    onPress = () => {
        this.setState({
            boolLogo: this.state = true
        });
        alert('image clicked ')
    };
    render() {
        return(
            <View style={styles.Header}>
                <Text style={styles.Space} />
                <Text style={styles.Text}>ARTG</Text>
                <TouchableHighlight onPress={() => navigation.openDrawer()} style={styles.content}>
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
        backgroundColor: 'black'
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