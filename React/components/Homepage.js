import React from "react";
import Header from "./Header";
import TimedSlideshow from 'react-native-timed-slideshow';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, Image } from 'react-native';


class Homepage extends React.Component {
    render() {
        const items = [
            {
                uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
                title: "New",
                text: "Minnesota, USA",
                duration: 6000,
                fullWidth: true
            },
            {
                uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
                title: "Victor Fallon",
                text: "Val di Sole, Italy",
                buton: "Discover",
                direction:'odd',
                duration: 6000,
                fullWidth: true
            },
            {
                uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
                title: "Mary Gomes",
                text: "Alps",
                duration: 6000,
                fullWidth: true
            }
        ];
        return(
            <View style={styles.body}>
                <TimedSlideshow
                    items={items}
                />
                <Header/>
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
    Slide: {
      position:'absolute',
        left: 0,
        top:0
    },
    main_content: {
        justifyContent:'center',
        alignItems: 'center',
    },
    Text : {
        // fontFamily: 'open-sans-bold',
        fontSize: 30,
    }
});