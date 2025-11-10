import StartGameScreen from "./screens/StartGameScreen";
import {ImageBackground, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

/**
 *  Game Logic includes
 *      - Fetching the User input
 *      - Resetting the user input
 *      - Moving to actual game screen if we confirm the input (validate input)
 */
export default function App() {
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMethod="cover" style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}>
                <StartGameScreen/>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15
    }
})
