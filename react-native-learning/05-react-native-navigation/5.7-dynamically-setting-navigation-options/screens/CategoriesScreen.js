import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGriTile from "../components/CategoryGriTile";
import {useNavigation} from "@react-navigation/native";

/**
 *  - navigate() method takes the required value i.e., name of the screen to which we want to navigate as 1st arg
 *      & we can pass optional 2nd arg as an object that allows us to define the parameters that should be passed to this to be loaded screen
 *      - e.g., "MealOverview" screen.
 *
 *  - How can we extract the parameters on the to be loaded screen ?
 *      - From "route" prop param property that contains the passed parameters from other screen. i.e., any component registered as a screen with react navigation,
 *          will always get "navigation" & "route" props by default, or we can use "useNavigation" hook.
 *      - For "navigation" refer: https://reactnavigation.org/docs/navigation-object
 *      - For "route" refer: https://reactnavigation.org/docs/route-object
 */
const CategoriesScreen = ({navigation}) => {

    // const navigation = useNavigation();

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            // Here we're passing the category's unique id to MealsOverviewScreen
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            });
        };

        return (
            <CategoryGriTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderCategoryItem}
                  keyExtractor={(item) => item.id}
                  numColumns={2}/>
    );
};

export default CategoriesScreen;