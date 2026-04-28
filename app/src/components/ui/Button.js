import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import{ colors } from "../../constants/colors"

export default function Button({ title, onPress, style, textStyle, disabled }) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                disabled && styles.disabled,
                style
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8,
    },
    text: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
    disabled: {
        backgroundColor: colors.muted,
    },
})