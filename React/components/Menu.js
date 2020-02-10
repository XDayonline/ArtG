import React from "react";

import { View, Button, StyleSheet, Text, Image,TouchableHighlight } from 'react-native';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {boolLogo:false};
    }
    onPress = () => {
       this.setState({
          boolLogo: this.state = true
       });
        alert('image clicked ' + this.state.boolLogo)
    };

    render() {
        return(
            <TouchableHighlight onPress={this.onPress} style={styles.content}>
                <Image style={styles.logo} source={require('../assets/icon/icons8-menu-24.png')} alt="menu" />
            </TouchableHighlight>
        )
    }
}
export default Menu

const styles = StyleSheet.create({
    content: {
        backgroundColor:'red',
        right:15
    },
    logo: {

    }
});