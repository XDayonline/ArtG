import React from "react";
import Header from "./Header";
import SliderBox from "./Slider";

import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Image } from 'react-native';


class Homepage extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Image source={require('../assets/cars/Bentley-Continental-GT-luxury-black-car_iphone_640x1136.jpg')} style={styles.backgroundImage} />
                <Header/>
                {/*<SliderBox/>*/}
                <View style={styles.main_content}>
                    <Text style={styles.Text}>New</Text>
                    <Text  style={styles.Text} >Continental GTC</Text>
                    <Button title='Discover' onPress={() => {}}></Button>
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
        flex:1,
        padding:50,
        // width:null,
        // height:null,
        resizeMode: 'stretch',
        position:'absolute',
        zIndex:0,
        justifyContent: 'center',
        left: 0,
        top:0
    },
    main_content: {
        justifyContent:'center',
        alignItems: 'center',
        zIndex:1
    },
    Text : {
        // fontFamily: 'open-sans-bold',
        fontSize: 30,
    }
});