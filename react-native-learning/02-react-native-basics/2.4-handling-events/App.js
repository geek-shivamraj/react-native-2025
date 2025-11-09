import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

/**
 *  - We handle events in React Native in the same way we do in webapps through event listeners & connect them to event handler functions
 *      and manage state in our components with "useState" hook
 *  - The only diff here is we're using React Native instead of React DOM. So, we can use React's core features same way.
 *  - We've similar prop as onClick in React Native as onPress
 *      - Becoz technically we don't have clicks in native mobile apps, instead we've taps or presses.
 */
export default function App() {

    const [enteredGoalText, setEnterGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnterGoalText(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal) => {
                    return (
                        <Text key={Math.random().toFixed(2)}>{goal}</Text>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
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
    },
    goalsContainer: {
        flex: 5,
    }
});
