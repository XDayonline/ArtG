import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
class InputField extends Component {
    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            customStyle
        } = this.props;
        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color: labelColor, fontSize:labelTextSize}, styles.label]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[
                        {color: textColor, borderBottomColor: borderBottomColor},
                        styles.inputFiled
                    ]}
                    secureTextEntry={inputType === "password"}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    }
});
export default InputField;