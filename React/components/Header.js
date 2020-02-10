import React from "react";
import Menu from "./Menu";
import { View, Button, StyleSheet, Text, Image } from 'react-native';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.Header}>
                <Text style={styles.Space} ></Text>
                <Text style={styles.Text}>ARTG</Text>
                <Menu/>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Space: {
        width:25
    },
    Text: {

    },
});