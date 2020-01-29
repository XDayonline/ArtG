import React from "react";

import { View, Button, StyleSheet, Text, Image } from 'react-native';

class Header extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.Header}>ARTG</Text>
                <Image source={require('../assets/icon/icons8-menu-24.png')} alt="Logo" />
            </View>
        )
    }
}
export default Header

const styles = StyleSheet.create({
    Header: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // logo: {
    //     marginTop:50,
    //     justifyContent: 'right',
    //     alignItems: 'right',
    // }
});