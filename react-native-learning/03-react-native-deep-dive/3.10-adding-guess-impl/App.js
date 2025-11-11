import StartGameScreen from "./screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

/**
 *  - For reusability & repeating certain things & settings, we might have noticed that the colors are being used in different places of the app.
 *      - Having all these colors in different places is not ideal.
 *      - In web CSS, we've solved this problem via CSS variables, CSS custom properties but this doesn't exist in React Native.
 *      - In React Native, we create a helper file that exposes certain constant values like colors.
 *      - We can create cascading styles by passing styles via prop.
 */
export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = () => {
        console.log("Game Over!");
        setGameIsOver(true);
    };

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

    if(userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if(gameIsOver && userNumber) {
        screen = <GameOverScreen/>
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMethod="cover" style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
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
