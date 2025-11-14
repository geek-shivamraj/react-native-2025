import {FlatList, StyleSheet, Text, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useEffect, useLayoutEffect} from "react";

/**
 *  How can we set Navigation options dynamically ?
 *      - We have multiple ways to achieve this
 *          - Way 1: Passing func as value to "options" prop (instead of object)
 *              - This func will be executed by React Navigation & it will receive an obj with 2 pieces of data
 *                  "route" & "navigation"
 *
 *          - Way 2: Set "options" from inside the component using navigation.setOptions() (Refer MealsOverviewScreen.js)
 *              - We should not set options directly in the component. We will get WARN
 *
 *              - Way 2.1: Rather we can use "useEffect" hook.
 *                  - With this, we will observe, the title won't be set as smoothly as it was instead it jumps after the screen/page
 *                      is loaded coz it is only set after the screen/page has been loaded. It's not set whilst the animation is in progress.
 *                  - This happens coz useEffect actually executes the effect code after the component func was executed first time.
 *                  - This can be fixed by using "useLayoutEffect" hook.
 *
 *              - Way 2.2: Using useLayoutEffect hook.
 *                  - We rarely use this hook, but we can use it in situations like this where we typically have some kind of ongoing animation &
 *                      we want to set/execute some side effect whilst it's still happening & before the component has been rendered or finish rendering.
 *                  - i.e., we run the side effect simultaneously with the component func execution.
 *                  - We use this hook same as useEffect hook just internally they're handled differently.
 */
const MealsOverviewScreen = ({route, navigation}) => {

    const categoryId = route.params.categoryId;

    const displayMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    /**
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;

    // Setting options like this will give WARN & we should not do like below in component func.
    // Rather we should use "useEffect" hook.
    navigation.setOptions({
        title: categoryTitle,
    });
    */

    /**
    useEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);
     */

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const renderMealItems = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />
    };

    return (
        <View style={styles.container}>
            <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItems}/>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});