import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import ScreenSafeArea from "./ScreenSafeArea";
import { colors } from "../../constants/colors";

export default function AuthForm({ method }) {
    const isLogin = method === "login";

    const handleLoginRedirection = () => {
        router.replace("auth/login");
    };

    const handleRegisterRedirection = () => {
        router.replace("auth/register");
    };

    return (
        <ScreenSafeArea edges={[]} statusBarStyle="light-content">
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.brand}>NoirÉclipse</Text>
                    <Text style={styles.subtitle}>
                        {isLogin ? "Welcome back" : "Create your account"}
                    </Text>
                </View>

                <View style={styles.formContainer}>

                    <Text style={styles.label}>Email address</Text>
                    <TextInput
                        placeholder="youremail@gmail.com"
                        placeholderTextColor="#9ca3af"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        placeholder="********"
                        placeholderTextColor="#9ca3af"
                        secureTextEntry
                        style={styles.input}
                    />

                    {
                        method === "register" && (
                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                    placeholder="********"
                                    placeholderTextColor="#9ca3af"
                                    secureTextEntry
                                    style={styles.input}
                                />
                            </View>
                        )
                    }

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>
                            {isLogin ? "Sign in" : "Create account"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={isLogin ? handleRegisterRedirection : handleLoginRedirection}
                    >
                        <Text style={styles.switchText}>
                            {isLogin
                                ? "Need an account? Create one"
                                : "Already have an account? Sign in"}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScreenSafeArea>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        paddingHorizontal: 24,
    },

    header: {
        marginBottom: 40,
        alignItems: "center",
    },

    brand: {
        fontSize: 34,
        fontWeight: "700",
        color: "#fff",
        letterSpacing: 2,
    },

    subtitle: {
        marginTop: 8,
        fontSize: 14,
        color: "#9ca3af",
    },

    formContainer: {
        gap: 12,
    },

    label: {
        color: "#d1d5db",
        fontSize: 13,
        marginTop: 10,
    },

    input: {
        backgroundColor: "#1f2937",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#374151",
    },

    primaryButton: {
        backgroundColor: "#3b82f6",
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 16,
        alignItems: "center",
    },

    primaryButtonText: {
        color: "#fff",
        fontWeight: "600",
    },

    switchText: {
        marginTop: 16,
        color: "#9ca3af",
        textAlign: "center",
        fontSize: 13,
    },
});