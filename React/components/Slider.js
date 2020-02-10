import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                require('../assets/cars/Bentley-Continental-GT-luxury-black-car_iphone_640x1136.jpg'),
                require('../assets/cars/renault-concept.jpg'),
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    images={this.state.images}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    sliderBoxHeight={850}
                    autoplay
                    circleLoop
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'absolute',
        zIndex:0,
    }
});
