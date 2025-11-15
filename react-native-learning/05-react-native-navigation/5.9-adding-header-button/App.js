import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

/**
 *  - Adding buttons/element to Header
 *      1. Adding header buttons/elements to the screen directly via options prop
 *          - This is only a good way if we don't need interaction with the component that's responsible for rendering the screen content.
 *
 *      2. Adding header buttons/elements to the component & use "useLayoutEffect" hook & navigation.setOptions
 *          - If we need direct communication, we should go for screen component.
 *          - Refer MealDetailScreen.js
 *
 *  - Adding a Custom button like IconButton to a header.
 *      - Refer IconButton.js
 *
 */
export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: {backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}
                                  options={{title: 'All Categories'}}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
                    <Stack.Screen name='MealDetail' component={MealDetailScreen}
                                  // options={{
                                  //     headerRight: () => {
                                  //         return <Button title="Tap me!"/>
                                  //     }}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
