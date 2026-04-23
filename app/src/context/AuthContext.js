import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api, { setApiToken, setLogoutInProgress } from '../services/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/config';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // 1. Initialize app by checking for token and fetching user data
    const loadUser = async () => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem(ACCESS_TOKEN);
            if (token) {
                setApiToken(token);
                // Fetch user data from Django
                const response = await api.get('/api/users/me/');
                setUser(response.data);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            console.log("Failed to load user:", error);
            setIsAuthenticated(false);
            setUser(null);
            setApiToken(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    // 2. Registration Phase
    const register = async (email, password, confirmPassword) => {
        const response = await api.post('/api/auth/register/', {
            email,
            password,
            confirm_password: confirmPassword
        }, { skipAuth: true });
        return response.data;
    };

    // 3. Activation Phase (Verify OTP)
    const verifyOTP = async (email, otp) => {
        const response = await api.post('/api/auth/verify-otp/', { email, otp }, { skipAuth: true });
        
        await AsyncStorage.setItem(ACCESS_TOKEN, response.data.access);
        await AsyncStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        setApiToken(response.data.access);
        
        // Load the user profile now that we have tokens
        await loadUser();
        return response.data;
    };

    // 4. Standard Login
    const login = async (email, password) => {
        const response = await api.post('/api/auth/login/', { email, password }, { skipAuth: true });
        
        await AsyncStorage.setItem(ACCESS_TOKEN, response.data.access);
        await AsyncStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        setApiToken(response.data.access);
        
        await loadUser();
        return response.data;
    };

    // 5. Logout
    const logout = async () => {
        setLogoutInProgress(true);
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            await AsyncStorage.removeItem(REFRESH_TOKEN);
        } catch (e) {
            console.error("Error clearing storage", e);
        } finally {
            setApiToken(null);
            setUser(null);
            setIsAuthenticated(false);
            setLogoutInProgress(false);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            isLoading,
            register,
            verifyOTP,
            login,
            logout,
            loadUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);