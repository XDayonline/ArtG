import React from 'react';
import * as Font from 'expo-font';


/*export default*/ class Poppins extends React.Component() {
    async  componentDidMount() {
        await Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        });
    }
}
