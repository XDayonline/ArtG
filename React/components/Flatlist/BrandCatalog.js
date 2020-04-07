import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView} from "react-native";
import Header from "../Header";
import BrandItem from "./BrandItem";
import brand from "./BrandData";
import { getCarsfromAPi } from "../../API/ARTGApi";
import {Button} from "react-native-elements";

class BrandCatalog extends React.Component {
    _loadBrand(){
        getCarsfromAPi().then(data => console.log(data))
    }
    constructor(props){
        super(props);
        this._brand= []
    };
    _displayDetailBrand = (idBrand) => {
        console.log("Brand " + idBrand);
        this.props.navigation.navigate("Cars", {idBrand: idBrand});
    };
    render() {
        // console.log(this._loadBrand() + " liste json");
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onPress={() => this._loadBrand()} />
                <FlatList
                    data={brand}
                    // data={this._brand}
                    renderItem={({ item }) => <BrandItem brand={item} displayDetailBrand={this._displayDetailBrand}/>}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}
export default BrandCatalog;


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
        padding:10,
        fontSize: 30,
        color:'white',
    },
    Btn: {
        marginTop: 30,
    }
});