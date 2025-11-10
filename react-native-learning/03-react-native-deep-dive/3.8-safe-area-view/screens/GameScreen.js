import {StyleSheet, Text, View} from "react-native";
import Title from "../components/Title";

/**
 *  Respecting Device Screen Restrictions with SafeAreaView
 *      - When it comes to adding some distance from the device edges, especially to the top of the device (notch), we've multiple ways:
 *          - Way 1: Use styling like marginTop: 100 or padding: 40 etc.
 *          - Way 2: Use React Native built-in component "SafeAreaView"
 *      - <SafeAreaView> automatically detect the device app is running on & adds an appropriate amount of spacing around
 *          our content to allow for the notch & status bar.
 *      - We would like to wrap <SafeAreaView> around all the screens (not just GameScreen). So, it's better to use in app.js
 *          - This is deprecated.
 *          - Use import {SafeAreaView} from "react-native-safe-area-context";
 */
const GameScreen = () => {
    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* GUESS */}
        <View>
            <Text>Higher or lower?</Text>
            {/* + */}
            {/* - */}
        </View>
        {/*<View>LOG ROUNDS</View>*/}
    </View>
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
})