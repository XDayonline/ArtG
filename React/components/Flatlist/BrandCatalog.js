import React from "react";
import {default as styled, StyleSheet, Text, View, Image, ScrollView, FlatList, SafeAreaView} from "react-native";
import Header from "../Header";
import BrandItem from "./BrandItem";
import {Button} from "react-native-elements";

class BrandCatalog extends React.Component {
    constructor(props) {
        super(props);
        this._brand = [];
        this.state = {
            data: [],
            isLoaded: false,
        }
    };

    state = {
        data: []
    };

    componentDidMount() {
        // this.fetchData();
        fetch('https://artgback.herokuapp.com/api/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODhmNDQwMDBhMmRhOGI2ZmJlZjNjOWY5NjZlZmVjYTQxNjQxOWNiMWM0MWJlYWNiYTgxMjU3YjNkZGFlOWM4NDAwMDk1ZTkxM2UzYTljMmIiLCJpYXQiOjE1ODYyNjY0NTgsIm5iZiI6MTU4NjI2NjQ1OCwiZXhwIjoxNjE3ODAyNDU4LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.S0SuK5xd5oG3utBdCCXUaCy9cLN80ZtGkdu5QvrHs8nOrjIQ61b4GHiKN97kyDX_gxiCQvLfWJAtWHG47nlzXFcDlUgX6pI9A5IBClVEzD2frJYpNH0XtoEPuEzN_J8KWF2Bkue-0widVO8h8g3wn_V7wG-wLPbFRIhIFq5_EhYQhRHfqAE2QgbU9flkCva-OhKsIoHN1gcWjAkAdLGUnOKoOE-34EsIIGwBXXByw5wXtTin1rL-lc36-2TREMozOTMAooqnttsUNmuPKF0aFFOW8bxX5bXTuV4jGBHYsxTedqwRxxZjjjrty-1XVqbV0eDnc9cIk2ZeyAmrZlT1O2FIas6YuPgTnV5fPA-KTvpVw_xcjAE3-K99eHMJgVKrpnDFza1Oe8AbXjiJkMLqd-ZvZzQMp4eML-PSRRrADCqSf04lkP-nK_xSyai64aUonQmCMOoPV9DUCqtF_Vu534kLrFfEF6FL2dQThDAxKK4JT8ui6N2BtYFJ2x94VC35jRswcsG--3C_qEpCZjv07fNE4rWEjRIJqO2pZgcXl_Zjnb2IQ5NCXlkiHrTSwMOEmdqL0tHDOSZ5YCBmVHNbnK9jaPVewAUwxS75C0QHtZraeoH0gNbXcboBxCjLxFj7Dvb7sATY-DM9v5958lJ6etl07Eopw2bYTPZlbDW074s'
            },
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json,
                })
            })
    }

    _displayDetailBrand = (idBrand) => {
        this.props.navigation.navigate("Cars", {idBrand: this.state.data.data[idBrand]});
    };

    render() {
        let {isLoaded, data} = this.state;

        if (!isLoaded) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.body}>
                    <Header navigation={this.props.navigation}/>
                    <FlatList
                        data={this.state.data.data}
                        renderItem={({item}) => <BrandItem brand={item} displayDetailBrand={this._displayDetailBrand}/>}
                    />
                </View>
            )
        }
    }
}

export default BrandCatalog;


const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    main_content: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    Text: {
        padding: 10,
        fontSize: 30,
        color: 'white',
    },
    Btn: {
        marginTop: 30,
    }
});
