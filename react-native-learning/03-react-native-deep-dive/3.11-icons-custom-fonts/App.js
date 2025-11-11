import StartGameScreen from "./screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {SafeAreaView} from "react-native-safe-area-context";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";

/**
 *  - Let's add icons to GameScreen.js
 *      - Working with Expo, adding icons is super simple becoz expo-created project already come with a lib that allow us to use icons.
 *      - From @expo/vector-icons, we can import various icon sets like Ionicons etc. Refer: https://docs.expo.dev/guides/icons/
 *      - Refer this for icons: https://icons.expo.fyi/Index
 *      - import {Ionicons} from '@expo/vector-icons'; (This is automatically available without installing anything as it's peer dependency of Expo)
 *      - We can get icon names from https://icons.expo.fyi/Index & then in the place where you want to use an icon we render <Ionicons> as a self-closing component.
 *
 *  -  Let's add custom fonts to InstructionText.js, Title.js & NumberContainer.js
 *      - Again Expo makes it pretty easy. We should set up our own fonts in the Root component of the app i.e., <App>
 *              becoz we want to load custom font early on when the app starts.
 *      - This can be done by installing extra package i.e., npx expo install expo-font (https://docs.expo.dev/versions/latest/sdk/font/)
 *      - We can import "useFonts" hook from 'expo-font'. This hook must be called in root component to load the fonts.
 *      - We pass an object (all the fonts to be loaded) to useFonts hook. Refer this to know how to install google fonts: https://docs.expo.dev/develop/user-interface/fonts/
 *      - While these fonts are loaded, we want to show a loading screen/splash screen. We can do this by installing package: expo-app-loading
 *          - npx expo install expo-app-loading
 *          - This gives us a utility component that we can render which will prolong the splash screen &
 *              will ensure that the splash screen is shown till some condition is met.
 *
 *
 */
export default function App() {

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    // Loading custom fonts
    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    // App loading condition
    if (!fontsLoaded) {
        return <AppLoading />;
    }

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
