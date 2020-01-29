import React from "react";
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Header from "./Header";


class Homepage extends React.Component {
    render() {
        return(
            <View>
                {/*<ImageBackground source={require('../assets/voitures/Bentley-Continental-GT-luxury-black-car_iphone_640x1136.jpg')}/>*/}
               <Header/>
                {/*<View style={styles.main_content}>*/}
                {/*    <Text style={styles.Text}>New</Text>*/}
                {/*    <Text  style={styles.Text} >Continental GTC</Text>*/}
                {/*    <Button title='Discover' onPress={() => {}}></Button>*/}
                {/*</View>*/}
            </View>
        );
    }
}

export default Homepage

const styles = StyleSheet.create({
    body: {
    },
    main_content: {
        marginTop:30,
        flex:0,
        justifyContent:'center',
        alignItems: 'center',
    },
    Text : {
        // fontFamily: 'open-sans-bold',
        fontSize: 30,
    }
});