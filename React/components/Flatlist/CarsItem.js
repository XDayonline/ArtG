import React from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";


class CarsItem extends React.Component {
    render() {
        const {cars, displayDetailCars} = this.props;
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{cars.title}</Text>
                <Button buttonStyle={{borderColor: 'white', borderWidth: 2}} type='outline'
                        titleStyle={{color: 'white'}} style={styles.Btn} title='Discover'
                        onPress={() => displayDetailCars(cars.id)}/>
                <Image source={cars.picture} style={styles.img}/>
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
    },
    img: {
        width: "100%",
        height: 400,
        flex: 1,
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
