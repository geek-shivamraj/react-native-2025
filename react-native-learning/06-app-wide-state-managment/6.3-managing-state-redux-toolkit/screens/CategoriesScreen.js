import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGriTile from "../components/CategoryGriTile";

const CategoriesScreen = ({navigation}) => {

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