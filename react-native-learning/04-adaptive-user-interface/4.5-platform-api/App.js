import StartGameScreen from "./screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import ColorsAndroid from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";

/**
 *  - Let's move away from adjusting to sizes & instead adjust to platforms.
 *  - Let's say there are certain elements that should look different in Android & iOS.
 *  - For e.g., we want to change the "Title" based on the platform our app is running on.
 *      - on iOS, we want to get rid of the border.
 *
 *  - For this, React native gives us Platform API.
 *      - Platform API allows us to detect on which platform app is running.
 *      - We don't need to set up a dynamic listener here becoz the platform is not going to change whilst app is running unlike the dimensions,
 *          instead it's always the same for entire lifetime of the app i.e., we don't need to react to any changes.
 *
 *  - Let's add status bar to control how the status bar looks
 *      - import {StatusBar} from 'expo-status-bar'
 *
 */
export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    // Loading custom fonts
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    // App loading condition
    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = (numberOfRounds) => {
        console.log("Game Over!");
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameIsOver && userNumber) {
        screen =
            <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }

    return (
        <>
            <StatusBar style="light"/>
            <LinearGradient colors={[ColorsAndroid.primary700, ColorsAndroid.accent500]} style={styles.rootScreen}>
                <ImageBackground source={require('./assets/images/background.png')}
                                 resizeMethod="cover" style={styles.rootScreen}
                                 imageStyle={styles.backgroundImage}>
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>

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
