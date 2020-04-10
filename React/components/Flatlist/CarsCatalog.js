import React from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Text, AsyncStorage
} from "react-native";
import Header from "../Header";
import cars from "./CarsData";
import CarsItem from "./CarsItem";

class CarsCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    };

    componentDidMount = async () => {
        const {params} = this.props.navigation.state;
        fetch('https://artgback.herokuapp.com/api/cars/1' , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
            },
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json,
                })
            })

    };

    _displayDetailCars = (idCars) => {
        this.props.navigation.navigate("Cart");
        console.log("Cars " + idCars)
    };

    render() {
        let {isLoaded, data} = this.state;
        if (!isLoaded) {
            return (
                <View style={styles.body}>
                    <Header navigation={this.props.navigation}/>
                    <View style={styles.loading}>
                        <Text style={styles.Text}>Loading...</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.body}>
                    <Header navigation={this.props.navigation}/>
                    <Text style={{color: 'white'}}>{data.data.id} Id de la marque</Text>
                    {/*<FlatList*/}
                    {/*    data={cars}*/}
                    {/*    renderItem={({item}) => <CarsItem cars={item} displayDetailCars={this._displayDetailCars}/>}*/}
                    {/*    keyExtractor={(item) => item.id.toString()}*/}
                    {/*/>*/}
                </View>
            )
        }
    }
}

export default CarsCatalog;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#262626'
    },
    Text: {
        padding: 10,
        fontSize: 30,
        color: 'white',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Btn: {
        marginTop: 30,
    }
});
