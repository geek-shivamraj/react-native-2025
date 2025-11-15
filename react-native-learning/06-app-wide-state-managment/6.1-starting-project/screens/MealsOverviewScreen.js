import {FlatList, StyleSheet, Text, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

const MealsOverviewScreen = ({route, navigation}) => {

    const categoryId = route.params.categoryId;

    const displayMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    const renderMealItems = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
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