import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView, FlatList} from "react-native";
import Header from "./Header";
import Case from "./BrandCase";

class ItemCatalog extends React.Component {
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <Case/>
            </View>
        )
    }
}
export default ItemCatalog;


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