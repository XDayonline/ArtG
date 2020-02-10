import React from "react";

import { View, Button, StyleSheet, Text, Image } from 'react-native';

class Header extends React.Component {
    render() {
        return(
            <View style={styles.Header}>
                <Text style={styles.Text}>ARTG</Text>
                <Image style={styles.logo} source={require('../assets/icon/icons8-menu-24.png')} alt="Logo" />
            </View>
        )
    }
}
export default Header

const styles = StyleSheet.create({
    Header: {
        zIndex:1,
        marginTop:50,
        alignItems: 'center',

    },
    Text: {
        flex:0,
        justifyContent: 'center',
    },
    logo: {
        flex:0,
    }
});