import React, { ReactElement } from 'react';
import Button from '../shared/Button';
import { DefaultDrawerNavigationProps } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import {ImageBackground, Text, View} from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    backgroundImage: {
        flex:1,
        position:'absolute',
        // zIndex:0,
        resizeMode:'cover',
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
const AnnonceText = styled.Text`
        padding:10;
        fontSize: 30;
        color:'white';
`;

function Page(): ReactElement {
    const navigation = useNavigation() as DefaultDrawerNavigationProps<'default'>;
    return (
        <ImageBackground source={require('../assets/cars/Voitures.jpg')}style={{width: '100%', height: '100%'}}>
            <View style={styles.main_content}>
                <AnnonceText>New</AnnonceText>
                <AnnonceText>Continental GTC</AnnonceText>
                <Button
                    buttonStyle={{borderColor:'white', borderWidth:2}}
                    type='outline'
                    titleStyle={{color:'white'}}
                    style={styles.Btn}
                    title='Discover'
                    onPress= {() => navigation.openDrawer()}
                />
            </View>
        </ImageBackground>
    );
}

export default Page;

