import React from "react";
import Header from "./Header";
import {Image, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage} from "react-native";
import {Button} from "react-native-elements";
import Homepage from "./Homepage";

class Login extends React.Component {
    clearText(input){
        input.setNativeProps({ text: '' });
    }
    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: "",
        }
    };

    _userLogin = async () => {
        const result = await fetch('https://artgback.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        const data = await result.json();
        if(data.success === true){
            Alert.alert( 'ok','you are connected')
            await AsyncStorage.setItem("name",data.data.name)
            await AsyncStorage.setItem("token", data.data.token)
            this.props.navigation.navigate("Home")
        }else{
            Alert.alert( 'Error','not connected')
        }
    };
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation} />
                <View style={styles.form}>
                    <View style={styles.case}>
                        <Image style={styles.logo} source={require('../assets/icon/icons8-invité-homme-24.png')} alt="menu" />
                        <TextInput style = {styles.inputText}
                                   ref={element => this._textUSer = element}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "Email"
                                   placeholderTextColor = "white"
                                   onChangeText = {(text) => this.setState({email:text})}/>
                        <TouchableHighlight style={styles.clear} onPress={() => {this.clearText(this._textUSer)}}>
                            <Image style={styles.deleteIcon} source={require('../assets/icon/icons8-effacer-24.png')} alt="menu" />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.case}>
                        <Image style={styles.logo} source={require('../assets/icon/icons8-cadenas-24.png')} alt="menu" />
                        <TextInput style = {styles.inputText}
                                   ref={element => this._textInput = element}
                                   underlineColorAndroid = "transparent"
                                   placeholder = "Password"
                                   placeholderTextColor = 'white'
                                   autoCapitalize = "none"s
                                   secureTextEntry={true}
                                   onChangeText = {(text) => this.setState({password:text})}/>
                        <TouchableHighlight style={styles.clear} onPress={() => {this.clearText(this._textInput)}}>
                            <Image style={styles.deleteIcon} source={require('../assets/icon/icons8-effacer-24.png')} alt="menu" />
                        </TouchableHighlight>
                    </View>
                </View>
                <Button buttonStyle={{borderColor:'white', borderWidth:0.5, borderRadius:60, width:200, marginLeft:90, marginTop:30}} type='outline' titleStyle={{color:'white'}} title='LOG IN' onPress={() => this._userLogin()}/>
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
    inputText: {
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
    },
    forgot:{
        // fontsize,
        marginTop: 10,
        color:"white",
        fontSize:11,
        textAlign: "center"
    }
});