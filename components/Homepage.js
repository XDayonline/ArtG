import React from "react";
import Header from "./Header";
import {Button, colors} from 'react-native-elements';
import { View, TextInput, StyleSheet, Text, ImageBackground, Image } from 'react-native';


class Homepage extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <ImageBackground source={require('../assets/cars/Voitures.jpg')}style={{width: '100%', height: '100%'}}>
                    <View style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Text  style={styles.Text} >Continental GTC</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onPress={() => {}} />
                    </View>
                </ImageBackground>
           </View>
        )
    }
}

export default Homepage

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundImage: {
        flex:1,
        position:'absolute',
        resizeMode:'cover',
    },
    main_content: {
        marginTop:150,
        justifyContent:'center',
        alignItems: 'center',
        zIndex:1
    },
    Text : {
         padding:10,
        fontSize: 30,
        color:'white',
    },
    Btn: {
        marginTop: 30,
    }
});
