import React from "react";
import {
    default as styled,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    AsyncStorage
} from "react-native";
import Header from "../Header";
import BrandItem from "./BrandItem";
import {Button} from "react-native-elements";

class BrandCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    };

    componentDidMount = async () => {
        fetch('https://artgback.herokuapp.com/api/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('token'),
                // 'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNThiN2FhZWE4OTA3ZWZjODkyMjFjYWEzNjYyNWVjNDc1ODJmNGFlZjgwM2VkNjEwNmEyOWNiZjM3Y2U0YTIwOTlmZmU1ZjQ0Y2I2YzEzMTIiLCJpYXQiOjE1ODY0NTY3MDAsIm5iZiI6MTU4NjQ1NjcwMCwiZXhwIjoxNjE3OTkyNzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.L5GPC9YwVoO0VoxdE6YbCegNnejz-FgtVjHlmXGssz4RDwE1tllhioy-yFFqvu3g4DqKVtA6sbYrp6sdm1qQuq8jkAT3wvmVqWUvuG3XDaLsWatwPln50wFDFPToDPGc1UNoSAZjA0ivbr0rICNYDHOF9I5361FYabiYLin7gtwwkW4y7HezfVLImUlMBkFC_2MZPTMn_MZf059LeEuy1zbOW4IXvNGDkLnlhAR5aYObZ7_98dU1ZYaBJA9mSNNv2Cl0jOKydPE35OKo6AOhJb9afaF36PDA8FQMRUTG_cuSfdlKjlD1RDccSrbdHb7hirjQNrnLndaT3VjOiltuwqJOlN3o_Z87hhZ3VxWdwQw-jloBO0Jsko0w0qTWVvr_rS2NhUlBGqBs7hV6FpBOguGmBbucqGXFMzTf8DZW4CiU4K0paYiaBKhsYsqe_XuUNkUtFV63krT8lVRADFBRb-toIWqH4sy5qWlsWowhkFgY6IV9L9bRMXKAihAYd_1EKWCK1nkZGA_esS1H5JuqSOJhHIX8RqQa_Y7yDRYNx00K3N1g7iWnLstGLDZA5GXCRawawwH763Uqjl1Mn7nsL2mV0Evyeo34gPpBMr6REHsjsgPge68Txe2sbCGAA8QdmxsfOye9OHLcIe91HIGCnGdnBXU4n9XMU7dbj0kkj88'
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

    UNSAFE_componentWillReceiveProps(nextProps,nextContext) {
        this.setState({
            idBrand: nextProps.navigation.getParam("idBrand"),
        });
    }

    _displayDetailBrand = (idBrand) => {
        this.props.navigation.navigate("Cars", {idBrand: this.state.data.data[1].marque});
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
                    <FlatList
                        data={this.state.data.data}
                        renderItem={
                            ({item}) => <BrandItem
                                style={styles.item}
                                brand={item}
                                displayDetailBrand={this._displayDetailBrand}
                            />
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )
        }
    }
}

export default BrandCatalog;


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
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
