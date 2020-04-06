import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image} from 'react-native';
import {Button} from "react-native-elements";

const DATA = [
    {
        id: 'case-1',
        title: 'First Brand',
        car: require('../../assets/cars/vantage-mobile-navigation.png'),
    },
    {
        id: 'case-2',
        title: 'Second Item',
        car: require('../../assets/cars/am700_thumb.png'),
    },
    {
        id: 'case-3',
        title: 'Third Item',
        car: require('../../assets/cars/vantage-mobile-navigation.png'),
    },
];

function Item({ title, car, navigation}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onclick={() => {}} />
            <Image source={car} style={{width:400, height: 400}} />
        </View>
    );
}



export default function App() {
    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} price={item.price} car={item.car}/>}
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
        backgroundColor:'red'
    },
    title: {
        paddingTop:50,
        paddingBottom: 20,
        fontSize: 30,
        color:'white',
    },
    Btn: {
        marginTop: 30,
    }
});
