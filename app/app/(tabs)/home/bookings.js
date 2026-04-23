import { View, Text, StyleSheet } from 'react-native';
import ScreenSafeArea from "../../../src/components/common/ScreenSafeArea";
import { colors } from "../../../src/constants/colors";

export default function BookingsScreen() {
    return (
        <ScreenSafeArea statusBarStyle="light-content" statusBarBackgroundColor={colors.background}>
            <View style={styles.container}>
                <Text style={styles.text}>My Tickets Screen</Text>
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