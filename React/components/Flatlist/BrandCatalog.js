import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView, FlatList} from "react-native";
import Header from "../Header";
import BrandCase from "./BrandCase";

class BrandCatalog extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <BrandCase/>
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