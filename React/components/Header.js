import React from "react";
import Menu from "./Menu";
import {View, Button, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';

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