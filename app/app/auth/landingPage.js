import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../src/constants/colors";
import ScreenSafeArea from "../../src/components/common/ScreenSafeArea";

export default function LandingPage() {

    return (
        <ScreenSafeArea statusBarStyle="light-content" edges={[]} statusBarBackgroundColor={colors.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to Noir Eclipse Cinema</Text>
            </View>
        </ScreenSafeArea>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
});