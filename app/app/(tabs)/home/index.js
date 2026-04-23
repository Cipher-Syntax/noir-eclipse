import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, RefreshControl, StyleSheet, Text } from "react-native";
import ScreenSafeArea from "../../../src/components/common/ScreenSafeArea";
import api from "../../../src/services/api";
import { useAuth } from "../../../src/context/AuthContext";
import { colors } from "../../../src/constants/colors";

// NOTE: You will need to create/update these UI components to match movies instead of places
// import { HomeHeader, FeaturedMovies, MovieCategoryRow } from "../../../src/components/home";

const Home = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    
    // Categorized Movie States
    const [nowShowing, setNowShowing] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [comingSoon, setComingSoon] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await api.get('/api/movies/');
            const allMovies = response.data?.results || response.data || [];

            // Group movies based on the status choices defined in Django
            const now = allMovies.filter(m => m.status === 'Now Showing');
            const popular = allMovies.filter(m => m.status === 'Popular Movies');
            const soon = allMovies.filter(m => m.status === 'Coming Soon');

            setNowShowing(now);
            setPopularMovies(popular);
            setComingSoon(soon);
        } 
        catch (error) {
            console.error("Home Movie Fetch Error:", error);
            setNowShowing([]);
            setPopularMovies([]);
            setComingSoon([]);
        }
        finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [user]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchMovies();
    }, []);

    if (loading) {
        return (
            <ScreenSafeArea statusBarStyle="light-content" edges={['top']} statusBarBackgroundColor={colors.background}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: colors.background }}>
                    {/* Header Skeleton */}
                    <View style={{ height: 100, backgroundColor: colors.tertiary, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }} />
                    
                    <View style={{ padding: 16, marginTop: 10 }}>
                        {/* Title Skeleton */}
                        <View style={{ height: 24, width: 180, backgroundColor: colors.secondary, borderRadius: 4, marginBottom: 16 }} />
                        
                        {/* Featured Movie Skeleton (Wide) */}
                        <View style={{ width: '100%', height: 200, backgroundColor: colors.secondary, borderRadius: 16, marginBottom: 30 }} />

                        {/* Category Title Skeleton */}
                        <View style={{ height: 24, width: 150, backgroundColor: colors.secondary, borderRadius: 4, marginBottom: 16 }} />
                        
                        {/* Movie Posters Skeleton (Tall) */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ width: 140, height: 210, backgroundColor: colors.secondary, borderRadius: 12, marginRight: 16 }} />
                            <View style={{ width: 140, height: 210, backgroundColor: colors.secondary, borderRadius: 12, marginRight: 16 }} />
                            <View style={{ width: 140, height: 210, backgroundColor: colors.secondary, borderRadius: 12 }} />
                        </ScrollView>
                    </View>
                </ScrollView>
            </ScreenSafeArea>
        );
    }

    return (
        <ScreenSafeArea statusBarStyle="light-content" edges={['top']} statusBarBackgroundColor={colors.background}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="never"
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{ paddingBottom: 20, backgroundColor: colors.background }}
                keyboardShouldPersistTaps="always"
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />}
            >
                <View style={styles.container}>
                    {/* Placeholder for your actual UI components */}
                    <Text style={styles.debugText}>Welcome back, {user?.first_name || 'Movie Fan'}!</Text>
                    
                    {/* You will replace these Text blocks with your actual Carousel and Row components.
                      Example:
                      <HomeHeader user={user} />
                      <FeaturedMovies movies={popularMovies} />
                      <MovieCategoryRow title="Now Showing" data={nowShowing} />
                      <MovieCategoryRow title="Coming Soon" data={comingSoon} />
                    */}

                    <Text style={styles.sectionTitle}>Popular Movies ({popularMovies.length})</Text>
                    <Text style={styles.sectionTitle}>Now Showing ({nowShowing.length})</Text>
                    <Text style={styles.sectionTitle}>Coming Soon ({comingSoon.length})</Text>

                </View>
            </ScrollView>
        </ScreenSafeArea>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    debugText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sectionTitle: {
        color: colors.muted,
        fontSize: 16,
        marginVertical: 10,
    }
});

export default Home;