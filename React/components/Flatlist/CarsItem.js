import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";


class CarsItem extends React.Component {
    render() {
        const { cars, displayDetailCars } = this.props;
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => displayDetailCars(cars.id)}>
                    <Text style={styles.title}>{cars.title}</Text>
                </TouchableOpacity>
                <Image source={cars.picture} style={{width:400, height: 400}} />
                <Text style={styles.text}>A partir de {cars.price}</Text>
            </View>
        )
    }
}

export default CarsItem;



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'purple'
    },
    title: {
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 30,
        color: 'white',
    },
    Text: {
        // justifyContent:'start',
        fontSize: 30,
        color: 'white',
    },
    Btn: {
        marginTop: 30,
    }
});