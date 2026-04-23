import { Tabs } from "expo-router";
import { View, Platform } from "react-native";
import { Home, Ticket, User } from "lucide-react-native"; 
import { useAuth } from "../../../src/context/AuthContext";
import { colors } from "../../../src/constants/colors";
import ScreenSafeArea from "../../../src/components/common/ScreenSafeArea";

const HomeLayout = () => {
    const { user } = useAuth();

    // Replaces the old utility. Checks the Django user model for missing names.
    const hasIncompleteProfileDot = user && (!user.first_name || !user.last_name);

    // Updated tabs to match a Cinema Booking flow instead of a Tour Guide flow
    const TABS = [
        { name: "index", title: "Movies", icon: Home },
        { name: "bookings", title: "My Tickets", icon: Ticket }, 
        { name: "profile", title: "Profile", icon: User },
    ];

    return (
        <ScreenSafeArea statusBarStyle="light-content" edges={['bottom']} statusBarBackgroundColor={colors.background}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        backgroundColor: colors.tertiary, // Used tertiary from your colors.js for the tab bar
                        borderTopWidth: 0,
                        height: Platform.OS === "ios" ? 100 : 80,
                        paddingBottom: Platform.OS === "ios" ? 30 : 12,
                        paddingTop: 12,
                    },
                    tabBarLabelStyle: {
                        fontSize: 11,
                        fontWeight: "500",
                        marginTop: 4,
                        flex: 1
                    },
                    tabBarActiveTintColor: colors.white,
                    tabBarInactiveTintColor: colors.muted,
                    sceneStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            >
                {TABS.map((tab) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            tabBarIcon: ({ color, focused }) => {
                                const Icon = tab.icon;
                                return (
                                    <View
                                        style={{
                                            width: 46,
                                            height: 46,
                                            borderRadius: 23,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: focused
                                                ? colors.primary // Uses your Pinkish-Red for active tabs
                                                : "transparent",
                                        }}
                                    >
                                        <Icon
                                            color={focused ? colors.white : color}
                                            size={22}
                                        />
                                        {/* Notification Dot for Incomplete Profile */}
                                        {tab.name === 'profile' && hasIncompleteProfileDot && !focused && (
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    top: 8,
                                                    right: 8,
                                                    width: 10,
                                                    height: 10,
                                                    borderRadius: 5,
                                                    backgroundColor: '#EF4444',
                                                }}
                                            />
                                        )}
                                    </View>
                                );
                            },
                        }}
                    />
                ))}
            </Tabs>
        </ScreenSafeArea>
    );
};

export default HomeLayout;