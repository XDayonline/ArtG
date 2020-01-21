import React from "react";

import { View, Button, StyleSheet, Text } from 'react-native';

class Header extends React.Component {
    render() {
        return(
            <View style={styles.Header}>
                <Text>ARTG</Text>
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
    }
});