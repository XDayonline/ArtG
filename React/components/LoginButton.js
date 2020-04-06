import React, {Component} from "react";
import {Button} from "react-native";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import colors from "../assets/styles/Colors";

class LoginButton extends Component {
    render() {
        return (
            <Button title='Login' onPress={() => {
            }}/>
        );
    }
}
export default LoginButton;