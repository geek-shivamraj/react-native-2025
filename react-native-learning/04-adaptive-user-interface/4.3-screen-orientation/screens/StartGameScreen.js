import {
    Alert,
    KeyboardAvoidingView, ScrollView,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

/**
 *  - Problem with using Dimension API outside the component func:
 *      - When the user starts in landscape mode & then changes the orientation back to portrait, the smaller margin will persist but why ?
 *          - Becoz the code where we're getting deviceHeight will be executed only once when the entire screen/file code will be executed for the first time.
 *          - So, if we adjust the screen orientation after starting the game, this code will not get executed again
 *              (component will get re-executed from time to time based on state change but not the style code that is outside the component func will not be re-executed.)
 *
 *   - Solution:
 *      - Any code that should react to the device orientation or size change, should go into the component func.
 *      - React Native gives an alternative way of accessing the dimension API, that allows us to then react to the device size or dimension changes inside of component func.
 *         - "useWindowDimensions()" hook
 *         - We will get width & height from this hook but internally, this hook will watch the device dimensions & whenever they change
 *              (e.g., device is rotated), we will get updated width & height.
 *         - So, now we can derive the margin dynamically inside this component func based on this dynamic height or width.
 *         - We can merge the styles by using array of styles.
 *
 *    - Managing Screen Content with KeyboardAvoidingView
 *      - We can use this component to wrap other component that involves/contains an input field so that whenever the keyboard that opens up
 *          that content that hold our input element & other elements, move up so that we can still access it even though the keyboard is open.
 *      - We can add "style" to this component & "behavior: height/padding/position" prop to configure the way keyboard behaves.
 *          - behavior: "position" will try to move the input out of the way so that we can see whilst typing but for this to move effectively,
 *              we need to have this in a scrollable container.
 *          - We can wrap this KeyboardAvoidingView with <ScrollView> to add scrolling in case we run out of space & now the input moves up as we start typing.
 *
 *       - Now with "KeyboardAvoidingView" side effect, we can tap somewhere to close the keyboard.
 *
 *      - This will create our style as this will be the top most element & we need to get as much space as we can on the root element for the rest of the elements.
 *
 *      - <KeyboardAvoidingView> is a super imp. component exposed by React Native that helps a lot with building accessible & usable user input areas.
 */
const StartGameScreen = ({onPickedNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    // Input Validation Logic
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert...
            Alert.alert('Invalid number!', 'Number has to be a number b/w 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }

        onPickedNumber(enteredNumber);
    }

    console.log("Height: " + height);
    const marginTopDistance = height < 400 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput
                            style={styles.numberInput} maxLength={2}
                            keyboardType="number-pad" autoCapitalize="none"
                            autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber}/>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: "center",
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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