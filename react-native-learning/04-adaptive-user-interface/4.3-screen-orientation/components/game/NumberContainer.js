import {StyleSheet, Text, View, Dimensions} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

/**
 *  Dimension API use case
 *      - We can import {Dimensions} from 'react-native'. It's not a component instead it's a JS object that we can use
 *          anywhere in our JS code including styles to get info like width, height etc. out of it.
 *      - For e.g., we want to reduce the font size if we're on smaller screen.
 *
 *      - window Vs screen
 *          - No difference on iOS,
 *          - on Android
 *              - Screen is entire available width & height including status bar.
 *              - window is available width & height excluding the status bar i.e., actual part of screen where the UI should be painted & usable.
 *
 *      - We can use this "deviceWidth" in either mathematical calculation or ternary op.
 */

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
    }
})