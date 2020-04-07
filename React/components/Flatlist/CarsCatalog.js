import React from "react";
import {
    StyleSheet,
    View,
    FlatList,
} from "react-native";
import Header from "../Header";
import cars from "./CarsData";
import CarsItem from "./CarsItem";

class CarsCatalog extends React.Component {
    _displayDetailCars = (idCars) => {
        this.props.navigation.navigate("Cart");
        console.log("Cars " + idCars)
    };
    render() {
        return(
            <View style={styles.body}>
                <Header navigation={this.props.navigation}/>
                <FlatList
                    data={cars}
                    renderItem={({ item }) => <CarsItem cars={item} displayDetailCars={this._displayDetailCars} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}
export default CarsCatalog;





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