import React from "react";
import Header from "./Header";
import {Image, StyleSheet, Text, View, TextInput, TouchableHighlight} from "react-native";
import {Button} from "react-native-elements";
import Homepage from "./Homepage";

class Login extends React.Component {
    clearText(input){
        input.setNativeProps({ text: '' });
    }
    render() {
        return(
            <View style={styles.body}>
                <Header/>
                <View style={styles.form}>
                    <View style={styles.case}>
                        <Image style={styles.logo} source={require('../assets/icon/icons8-invité-homme-24.png')} alt="menu" />
                        <TextInput style = {styles.textinput}
                                   ref={element => this._textUSer = element}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "Username"
                                   placeholderTextColor = "white"
                                   onChangeText = {this.handleName}/>
                        <TouchableHighlight style={styles.clear} onPress={() => {this.clearText(this._textUSer)}}>
                            <Image style={styles.deleteIcon} source={require('../assets/icon/icons8-effacer-24.png')} alt="menu" />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.case}>
                        <Image style={styles.logo} source={require('../assets/icon/icons8-cadenas-24.png')} alt="menu" />
                        <TextInput style = {styles.textinput}
                                   ref={element => this._textInput = element}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "Password"
                                   placeholderTextColor = 'white'
                                   autoCapitalize = "none"
                                   secureTextEntry={true}
                                   onChangeText = {this.handleEmail}/>
                        <TouchableHighlight style={styles.clear} onPress={() => {this.clearText(this._textInput)}}>
                            <Image style={styles.deleteIcon} source={require('../assets/icon/icons8-effacer-24.png')} alt="menu" />
                        </TouchableHighlight>
                    </View>
                </View>
                    <Button buttonStyle={{borderColor:'white', borderWidth:0.5, borderRadius:60, width:200, marginLeft:90, marginTop:30}} type='outline' titleStyle={{color:'white'}} title='LOG IN' onPress={() => {}}/>
            </View>




    )
    }
}



export default Login

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor:'#0E0B21',
    },
    form: {
        marginTop:100
    },
    case: {
        padding:15,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        marginLeft: 50,
        marginBottom: 30,
        width:280
    },
    textinput: {
        marginLeft:20,
        color:'white',
    },
    clear: {
        width:15,
        height:15,
        left:250,
        position: 'absolute',
        alignItems:'center',
    },
    deleteIcon: {
        width:15,
        height:15
    }
});