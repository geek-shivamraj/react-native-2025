import {FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/**
 *  - We would want to delete the item when tapped. To make items tappable, if this would be a web app,
 *      all we've to do is add "onClick" prop to the item but in mobile app, we've to explicitly make the item pressable.
 *  - We can make an item pressable by wrapping it with <Pressable> component (inbuilt component provided by React Native)
 *      - <Touchable> & related components are old.
 *  - On pressing the <Pressable> component, the "onPress" prop will trigger the assigned func.
 */
export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
            text: enteredGoalText, id: Math.random().toString()
        }]);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter(goal => goal.id !== id);
        });
    }

    return (<View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
            <FlatList data={courseGoals}
                      renderItem={(itemData) => {
                          return (
                              <GoalItem
                                  text={itemData.item.text}
                                  id={itemData.item.id}
                                  onDeleteItem={deleteGoalHandler}
                              />
                          )
                      }}
                      keyExtractor={(item, index) => item.id}/>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1, paddingTop: 50, paddingHorizontal: 16
    }, goalsContainer: {
        flex: 5,
    }
});
