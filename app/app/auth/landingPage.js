import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { colors } from "../../src/constants/colors";
import ScreenSafeArea from "../../src/components/common/ScreenSafeArea";

export default function LandingPage() {
    const logo = require("../../assets/icons/logo.png");

    return (
        <ScreenSafeArea statusBarStyle="light-content" edges={[]} statusBarBackgroundColor={colors.background}>
            <View style={styles.container}>
                <ImageBackground source={logo} style={styles.background} resizeMode="contain" />
                <View>
                    <Text style={styles.heading}>
                        Immerse in the Magic of Movies
                    </Text>

                    
                </View>
                {/* <ImageBackground
                    source={logo}
                    style={styles.background}
                    resizeMode="contain"
                >

                    <View style={styles.middle}>
                        <Text style={styles.heading}>
                            Immerse in the Magic of Movies
                        </Text>

                        <Text style={styles.brand}>
                            Where every ticket tells a story.
                        </Text>

                        <Text style={styles.description}>
                            Discover the hottest releases, choose the best seats,
                            and book in seconds.
                        </Text>

                        <Text style={styles.description}>
                            From blockbusters to indie gems, the cinema is in your pocket.
                        </Text>
                    </View>
                </ImageBackground> */}
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
    background: {
        width: 300,
        height: 300,
    },
    heading: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
});