import {FlatList, StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

/**
 *  - Now that we passed & extracted the category id, we can use it in MealsOverviewScreen to load the meals we want to display.
 *  - We can note in dummy data for MEALS, a meal can have multiple ids i.e., a meal can belong to multiple categories.
 *
 */
const MealsOverviewScreen = ({route}) => {

    const categoryId = route.params.categoryId;

    const displayMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

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