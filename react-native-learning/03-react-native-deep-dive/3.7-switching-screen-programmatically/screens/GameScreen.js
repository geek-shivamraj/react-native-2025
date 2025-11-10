import {StyleSheet, Text, View} from "react-native";

/**
 *  - This Screen will be displayed as soon as user picks a number.
 *  - Later we will learn & use 3rd party package that helps with navigation b/w different screens.
 *  - But for now we will do with any external dependency by managing a state to keep track of whether we've a number or not.
 *
 *  - When it comes to adding some distance from the device edges, especially to the top of the device (notch), we've multiple ways:
 *      - Way 1: Use styling like marginTop: 100 or padding: 40 etc.
 *      - Way 2: Use React Native built-in component "SafeAreaView"
 */
const GameScreen = () => {
    return <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
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
        padding: 12,
    }
})