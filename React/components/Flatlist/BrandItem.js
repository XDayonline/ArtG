import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from "react-native-elements";

class BrandItem extends React.Component {
    render() {
        const { brand, displayDetailBrand } = this.props;
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{brand.marque}</Text>
                <Button buttonStyle={{borderColor:'white', borderWidth:2}} type='outline' titleStyle={{color:'white'}} style={styles.Btn} title='Discover' onPress={() => displayDetailBrand(brand.id)} />
                <Image source={brand.picture} style={{width:400, height: 400}} />
            </View>
        )
    }
}

export default BrandItem;

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
