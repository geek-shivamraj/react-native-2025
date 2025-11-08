import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

/**
 * - Only setting like setEnterGoalText(''); will not clear the TextInput, it only resets the state.
 *      - We've to bind (2-way bind) the state to TextInput by using value prop.
 */
const GoalInput = (props) => {

    const [enteredGoalText, setEnterGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnterGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnterGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
                       placeholder="Your course goal"
                       onChangeText={goalInputHandler}
                       value={enteredGoalText}/>
            <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    }
});