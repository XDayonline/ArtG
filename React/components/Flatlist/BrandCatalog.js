import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView} from "react-native";
import Header from "../Header";
import BrandItem from "./BrandItem";
import brand from "./BrandData";

class BrandCatalog extends React.Component {
    _displayDetailBrand = (idBrand) => {
        console.log("Brand " + idBrand)
    };
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <FlatList
                    data={brand}
                    renderItem={({ item }) => <BrandItem brand={item} displayDetailBrand={this._displayDetailBrand()}/>}
                    keyExtractor={item => item.id}
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