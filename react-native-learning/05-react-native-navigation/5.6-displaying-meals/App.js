import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

/**
 *  - Now that we passed & extracted the category id, we can use it in MealsOverviewScreen to load the meals we want to display.
 *  - We can note in dummy data for MEALS, a meal can have multiple ids i.e., a meal can belong to multiple categories.
 *
 */
export default function App() {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories">
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
