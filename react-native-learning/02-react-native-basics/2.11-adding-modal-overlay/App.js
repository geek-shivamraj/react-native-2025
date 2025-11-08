import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/**
 *  - We want to outsource GoalInput part into a modal. Modals are these overlays that pop up on mobile apps that overlay
 *      the main screen & allow you to take some action, after which they disappear.
 *
 *  - Adding a modal & input logic to the modal is pretty easy in React Native becoz it comes with built-in <Modal> component.
 *  - To create a Modal, we simply need to wrap the content that should go into the Modal.
 *  - Let's add a button to open/close the modal.
 *      - Since "button" doesn't take/support a style prop as built-in <Button> is already pre-styled.
 *      - If we want to style our own button, we've to build our own button with <Pressable> component & some <Text> & <View> inside it.
 *      - With pre-built button, we can change the color through "color" prop
 *
 */
export default function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false);
    }

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
            text: enteredGoalText, id: Math.random().toString()
        }]);
        endAddGoalHandler();
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        </View>);
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5,
    }
});
