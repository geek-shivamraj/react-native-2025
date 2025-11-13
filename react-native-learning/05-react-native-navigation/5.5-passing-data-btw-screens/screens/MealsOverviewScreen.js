import {StyleSheet, Text, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

/**
 *  - How can we extract the parameters on the to be loaded screen ?
 *      - From "route" prop param property that contains the passed parameters from other screen. i.e., any component registered as a screen with react navigation,
 *          will always get "navigation" & "route" props by default, or we can use "useNavigation" hook.
 *      - For "navigation" refer: https://reactnavigation.org/docs/navigation-object
 *      - For "route" refer: https://reactnavigation.org/docs/route-object
 *
 */
const MealsOverviewScreen = ({route, navigation}) => {

    // const categoryId = route.params.categoryId;

    // Alternative approach to get route instead of forwarded "route" prop
    const route1 = useRoute();
    const categoryId = route1.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {categoryId}</Text>
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