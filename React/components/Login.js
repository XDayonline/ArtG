import React from "react";
import Header from "./Header";
import {Image, StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity, AsyncStorage} from "react-native";
import {Button} from "react-native-elements";
import Homepage from "./Homepage";

class Login extends React.Component {
    clearText(input){
        input.setNativeProps({ text: '' });
    }
    constructor(props){
        super(props);
        this.state= {
            email: "david@david.fr",
            password: "testtest",
        }
    };

    handleEmail = text => {
        this.setState({email:text})
    };

    handlePassword = text => {
        this.setState({password:text})
    };

    login= async (email, password) => {
        if( email && password){
            // this.setState({email,password});
            this.authenticate(email,password);
        }

    };
    authenticate = async () => {
        const result = await fetch('https://artgback.herokuapp.com/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        });

        const data = await result.json();
        console.log(data)

       // this.setState({loading: true, message: ""});
       //  fetch.get('https://artgback.herokuapp.com/api/login',{
       //     body:JSON.stringify({
       //         username:this.state.email,
       //         password:this.state.password,
       //     }) })
       //     .then(async res => {
       //         console.log(res.json);
       //         this.setState({loading: false, message: ""});
       //          if(res.data.user === "Success") {
       //              await AsyncStorage.setItem("email", this.state.email);
       //              await AsyncStorage.setItem("password", this.state.password);
       //              this.props.navigation.navigate("Home")
       //          }
       //          else{
       //              this.setState({message : "This account not exist", loading:false})
       //          }
       //     })
       //     .catch(err => {
       //          this.setState({message:"Error connecting to server, Please try again", loading:false})
       //  })

    };

    // componentDidMount() {
    //     this.login();
    // }

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
                                   onChangeText = {this.handleEmail}/>
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
                                   autoCapitalize = "none"
                                   secureTextEntry={true}
                                   onChangeText = {this.setState({password:text})}/>
                        <TouchableHighlight style={styles.clear} onPress={() => {this.clearText(this._textInput)}}>
                            <Image style={styles.deleteIcon} source={require('../assets/icon/icons8-effacer-24.png')} alt="menu" />
                        </TouchableHighlight>
                    </View>
                </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:0.5, borderRadius:60, width:200, marginLeft:90, marginTop:30}} type='outline' titleStyle={{color:'white'}} title='LOG IN' onPress={() => this.authenticate(this.state.email, this.state.password )}/>
                    </TouchableOpacity>
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