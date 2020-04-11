import React from "react";
import Header from "./Header";
import {Image, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage} from "react-native";
import {Button} from "react-native-elements";


class Logout extends React.Component {
    _userLogout = async () => {
       await  fetch('https://artgback.herokuapp.com/api/login', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        try {
            await AsyncStorage.removeItem("token");
            this.props.navigation.navigate("Login")
            Alert.alert("Logout Success!")
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation} />
                <View style={styles.form}>
                    <Button buttonStyle={{borderColor:'white', borderWidth:0.5, borderRadius:60, width:200, marginLeft:90, marginTop:30}} type='outline' titleStyle={{color:'white'}} title='LOG OUT' onPress={() => this._userLogout()}/>
                </View>
            </View>
        )
    }
}



export default Logout

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor:'#0E0B21',
    },
    form: {
        marginTop:100
    },
});