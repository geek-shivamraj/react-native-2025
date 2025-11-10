import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

/**
 *  - To restrict the digit size on input element, we can use "maxLength" prop.
 *
 *  - To control the type of keyboard is opened by the device on input, we can use "keyboardType" prop.
 *
 *  - Refer the doc for all the props for TextInput component: https://reactnative.dev/docs/textinput
 *
 */
const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput} maxLength={2}
                keyboardType="number-pad" autoCapitalize="none"
                autoCorrect={false}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,

        // For Background shadow on Android
        elevation: 4,

        // For ios, we can use below properties for shadow
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});