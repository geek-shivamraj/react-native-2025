import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

/**
 *  - If we add more & more items to the list, at some point, the list will go beyond the available space &
 *      we would expect that we simply scroll now, but it turns out we can't scroll.
 *      - Becoz default <View> component is not scrollable (That's also the diff compared to browser where by default scrolling bar
 *          appears if the content exceeds the available space but that's not the case with Mobile apps.
 *      - In mobile Apps, if we want to scroll, we've to explicitly tell React Native & the native platforms
 *
 *      - We can use <ScrollView> provided by React Native that provides us a scrollable view/container element.
 *          - Note: The <ScrollView> makes something scrollable but the area that's scrollable in th end is determined by the container that holds the ScrollView.
 *          - For e.g., we can add <ScrollView> inside a normal <View> component (this will restrict the available height) & add style to <View> component.
 *
 *      - Refer for more props: https://reactnative.dev/docs/scrollview#alwaysbouncevertical-ios
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
                <ScrollView>
                    {courseGoals.map(goal =>
                        <View key={Math.random().toFixed(3)} style={styles.goalItem}>
                            {/*Add specific style (goalText) to <Text> component.*/}
                            <Text style={styles.goalText}>{goal}</Text>
                        </View>
                    )}
                </ScrollView>
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
