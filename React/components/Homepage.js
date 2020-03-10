import React from "react";
import Header from "./Header";
import {Button, colors} from 'react-native-elements';
import { View, TextInput, StyleSheet, Text, ImageBackground, Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';





class Homepage extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header/>
                <ImageBackground source={require('../assets/cars/Voitures.jpg')}style={{width: '100%', height: '100%'}}>
                    <View style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Text  style={styles.Text} >Continental GTC</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onPress= {() => navigation.navigate('Login')}/>
                    </View>
                </ImageBackground>
           </View>
        )
    }
}

export default Homepage

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    backgroundImage: {
        flex:1,
        position:'absolute',
        // zIndex:0,
        resizeMode:'cover',
    },
    main_content: {
        marginTop:150,
        justifyContent:'center',
        alignItems: 'center',
        zIndex:1
    },
    Text : {
        // fontFamily: 'open-sans-bold',
         padding:10,
        fontSize: 30,
        color:'white',
    },
    Btn: {
        marginTop: 30,
    }
});