import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image} from 'react-native';
import {Button} from "react-native-elements";


const DATA = [
    {
        id: 'case-1',
        title: 'First Item',
        car: require('../../assets/cars/am700_thumb.png'),
        price: '10 000 €'
    },
];

function Cartitem({ title, price, car}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Image source={car} style={{width:400, height: 400}} />
            <Text style={styles.text}>A partir de {price}</Text>
        </View>
    );
}

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Cartitem title={item.title} price={item.price} car={item.car}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        justifyContent:'center',
        alignItems: 'center',
        zIndex:1,
        backgroundColor:'purple'
    },
    title: {
        paddingTop:50,
        paddingBottom: 20,
        fontSize: 30,
        color:'white',
    },
    Text: {
        // justifyContent:'start',
        fontSize: 30,
        color:'white',
    },
    Btn: {
        marginTop: 30,
    }
});
