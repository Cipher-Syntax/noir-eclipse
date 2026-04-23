import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenSafeArea from "../../../src/components/common/ScreenSafeArea";
import { colors } from "../../../src/constants/colors";
import { useAuth } from "../../../src/context/AuthContext";

export default function ProfileScreen() {
    const { logout, user } = useAuth();

    return (
        <ScreenSafeArea statusBarStyle="light-content" statusBarBackgroundColor={colors.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Profile: {user?.email}</Text>
                
                <View style={{ marginTop: 20 }}>
                    <Button title="Logout" color={colors.primary} onPress={logout} />
                </View>
            </View>
        </ScreenSafeArea>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    }
});