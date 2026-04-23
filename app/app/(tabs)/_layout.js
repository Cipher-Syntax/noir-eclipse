import { Stack, useRouter, useSegments } from "expo-router";
import { View, Text, ActivityIndicator, StyleSheet, StatusBar, useColorScheme } from "react-native";
import React, { useEffect } from 'react';
import { useAuth } from "../../src/context/AuthContext";

export default function ProtectedLayout() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const colorScheme = useColorScheme();
    const segments = useSegments(); 

    const inProtectedGroup = segments[0] === '(tabs)'; 
    
    const defaultStatusBarStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content';
    const defaultStatusBarBackground = colorScheme === 'dark' ? '#0F172A' : '#FFFFFF';

    useEffect(() => {
        if (isLoading) return;

        if (!isAuthenticated && inProtectedGroup) {
            router.replace("/auth/landingPage");
        }
    }, [isLoading, isAuthenticated, segments, inProtectedGroup, router]);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#C41E5E" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    // Don't render the protected stack at all if not authenticated
    if (!isAuthenticated) return null;

    return (
        <>
            <StatusBar translucent={false} backgroundColor={defaultStatusBarBackground} barStyle={defaultStatusBarStyle} />
            <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
                <Stack.Screen name="home" /> 
                {/* Add other protected screens here if needed */}
            </Stack>
        </>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: '#241B6E'
    },
    loadingText: {
        fontSize: 16, 
        marginTop: 10,
        color: '#FFFFFF'
    }
});