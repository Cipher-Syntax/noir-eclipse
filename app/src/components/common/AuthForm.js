import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenSafeArea from "./ScreenSafeArea";
import { colors } from "../../constants/colors";
import { useForm, Controller } from "react-hook-form";
import Button from "../ui/Button";
import { router } from "expo-router";

const handleLoginRedirection = () => {
    router.push("auth/login");
}

const handleRegisterRedirection = () => {
    router.push("auth/register");
}
export default function AuthForm ({ router, method }) {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, } = useForm();
    const [error, setError] = useState('');
    const status = method === "login" ? "Welcome Back" : "Create an Account";


    return (
        <ScreenSafeArea edges={[]} statusBarStyle="light-content">
            <View style={styles.container}>
                {
                    method === "login" ? (
                        <View>
                            <Button title="Create an Account" onPress={handleRegisterRedirection}/>
                        </View>
                    ) : (
                        <View>
                           <Button title="Login" onPress={handleLoginRedirection} />
                        </View>
                    )
                }
            </View>
        </ScreenSafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center",
    }
})