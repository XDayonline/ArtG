import React from "react";
import Header from "./Header";
import SliderBox from "./Slider";
import {Button, colors} from 'react-native-elements';
import { View, TextInput, StyleSheet, Text, ImageBackground, Image } from 'react-native';


class Homepage extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Image source={require('../assets/cars/1.png')} style={styles.backgroundImage} />
                <Header/>
                <View style={styles.main_content}>
                    <Text style={styles.Text}>New</Text>
                    <Text  style={styles.Text} >Continental GTC</Text>
                    <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onPress={() => {}}/>
                </View>
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
        width:500,
        position:'absolute',
        zIndex:0,
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