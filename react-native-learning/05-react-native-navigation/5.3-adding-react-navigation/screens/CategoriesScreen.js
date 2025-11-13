import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGriTile from "../components/CategoryGriTile";

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGriTile title={itemData.item.title} color={itemData.item.color}/>
    );
};

/**
 *  - We need to add "numColumns = 2" prop to <FlatList> to display 2 columns of item next to each other.
 *      By default, numColumns=1
 */
const CategoriesScreen = (props) => {
    return (
        <FlatList data={CATEGORIES} renderItem={renderCategoryItem}
                  keyExtractor={(item) => item.id}
                  numColumns={2}/>
    );
};

export default CategoriesScreen;