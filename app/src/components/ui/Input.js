import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default function Input({ value, onChangeText, placeholder, secureTextEntry, style, ...props }) {
    return (
        <TextInput 
            style={[
                styles.input, style
            ]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.muted}
            secureTextEntry={secureTextEntry}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        color: colors.text,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        marginBottom: 16,
        padding: 8,
        fontSize: 16,
    },
})