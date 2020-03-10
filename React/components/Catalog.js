import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import {Button} from "react-native-elements";

class Catalog extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <View>
                        <View style={styles.main_content}>
                            <Text style={styles.Text}>New</Text>
                            <Text  style={styles.Text} >Continental GTC</Text>
                            <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                        </View>
                </View>
                <View>
                    <View style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Text  style={styles.Text} >Continental GTC</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                    </View>
                </View>
            </View>
        )
    }
}
export default Catalog;

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