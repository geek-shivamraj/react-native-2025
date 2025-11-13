import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGriTile from "../components/CategoryGriTile";

/**
 *  - We need to add "numColumns = 2" prop to <FlatList> to display 2 columns of item next to each other.
 *      By default, numColumns=1
 */
const CategoriesScreen = ({navigation}) => {

    const renderCategoryItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate("MealsOverview");
        };

        return (
            <CategoryGriTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderCategoryItem.bind()}
                  keyExtractor={(item) => item.id}
                  numColumns={2}/>
    );
};

export default CategoriesScreen;