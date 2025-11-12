import {Platform, StyleSheet, Text} from "react-native";

const Title = ({children}) => {
    console.log("Title.ios.js picked!!")
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

/**
 * - For this, React native gives us Platform API.
 *      - Platform API allows us to detect on which platform app is running.
 *      - We don't need to set up a dynamic listener here becoz the platform is not going to change whilst app is running unlike the dimensions,
 *          instead it's always the same for entire lifetime of the app i.e., we don't need to react to any changes.
 *
 * - Let's get rid of border for iOS & keep it for android. There are multiple ways:
 *      Way 1: Using ternary op
 *
 *      Way 2: Using Platform select method
 *
 *     Way 3: Writing Platform specific file. Check "Title.android.js"
 *          - By just adding extensions like .ios or .android, & making sure the import will not include these extension wherever used,
 *              React native will pick different files for the different platform automatically.
 *          - For e.g., Title.android.js, Title.ios.js, colors.android.js, colors.ios.js
 */
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2}),
        // borderWidth: 0,
        // borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});
