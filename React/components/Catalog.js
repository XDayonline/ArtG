import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import Header from "./Header";
import {Button} from 'react-native-elements';


const Case = styled.view`
    // backgroundColor: ${props => props.backColor};
    
    justifyContent:'center';
    alignItems: 'center';
    zIndex:1;
    `;

class Catalog extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <View style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                        <Image source={require('../assets/cars/vantage-mobile-navigation.png')} style={{width:400, height: 400}} />
                    </View>
                    <Case backColor="red">
                        <Text style={styles.Text}>New</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                        <Image source={require('../assets/cars/db11-mobile-navigation.png')} style={{width:400, height: 400}}/>
                    </Case>
                    <Case style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                        <Image source={require('../assets/cars/vantage-mobile-navigation.png')} style={{width:400, height: 400}} />
                    </Case>
                    <View style={styles.main_content}>
                        <Text style={styles.Text}>New</Text>
                        <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' />
                        <Image source={require('../assets/cars/am700_thumb.png')}  style={{width:400, height: 400}}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Catalog;


const styles = StyleSheet.create({
    body: {
        flex: 1
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