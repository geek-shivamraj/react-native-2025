import {Image, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

/**
 *  - When it comes to creating an image with rounded corners, we can create a View around our image & then add overflow: 'hidden'.
 *
 *  - Using & Styling Nested <Text> component
 *      - A <Text> component can't hold too many other kinds of components. For e.g., <Text> should not wrap a <View> but
 *          a <Text> component can wrap other <Text> components.
 *      - Having <Text> component in another <Text> component allows us to add different styling to a text than rest of the text.
 *
 *      - Imp. Note:
 *          - Nested <Text> elements are affected by the text-specific styles we set on the parent <Text> component (exception case)
 */
const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
                the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        // To hide the square/rectangular nature of the actual img &
        //  use this container as overlay/mask for the image.
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});