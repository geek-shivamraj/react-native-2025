import StartGameScreen from "./screens/StartGameScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {

    const [userNumber, setUserNumber] = useState();

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

    if(userNumber) {
        screen = <GameScreen/>;
    }

    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
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
