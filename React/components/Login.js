import React, {Component} from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import colors from "../assets/styles/Colors";
import InputField from "./InputFiled";
import LoginButton from "./LoginButton";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={[styles.avoidView, styles.wrapper]} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <FontAwesomeIcon icon="coffee" />
                        <InputField
                            labelText="Username"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.orange}
                            inputType="text"
                            customStyle={{marginBottom: 30}}
                        />
                        <InputField
                            labelText="Password"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.orange}
                            inputType="password"
                            customStyle={{marginBottom: 30}}
                        />
                        <LoginButton/>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        backgroundColor: colors.darkblue
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    loginHeader: {
        fontSize: 28,
        fontWeight: "300",
        color: colors.white,
        marginBottom: 40
    }
});