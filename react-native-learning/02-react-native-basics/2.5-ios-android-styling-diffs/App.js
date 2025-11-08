import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

/**
 *  - When we apply goalItem style to each courseGoal, android is fine but on ios, the rounder corners are missing. Why ?
 *      - As it turns out that <Text> component is translated by React Native to a fitting Native Widget/UI element and the
 *          translated element in case of Android seems to support rounded corner but in case of iOS, the underlying/translated
 *          native element doesn't support round corners.
 *      - Solution:
 *          - Wrap the <Text> component with <View> component & add style to the <View> component.
 *          - Becoz it turns out the translated Native element for <View> component supports rounded corner on both platforms.
 *
 *    - Post round corner fix, we will see the text "color" property is not working. Though the style is already applied to <View> component Why?
 *      - Concept: Unlike CSS for the web, the styles don't cascade in React Native i.e., child elements/descendant elements will
 *          not inherit the styles from parent/ancestor elements.
 *      - Since the cascading is not applicable in RN, styles applied to <View> component will not be cascaded to <Text> element.
 *      - Solution:
 *          - Add specific style (goalText) to <Text> component.
 *
 *      - We should apply styles on the elements where they're supported instead of some global parent element.
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
                {courseGoals.map(goal =>
                    <View key={Math.random().toFixed(3)} style={styles.goalItem}>
                        {/*Add specific style (goalText) to <Text> component.*/}
                        <Text style={styles.goalText}>{goal}</Text>
                    </View>
                )}
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
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    }
});
