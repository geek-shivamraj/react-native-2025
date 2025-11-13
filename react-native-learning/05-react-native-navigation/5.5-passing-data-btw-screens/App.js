import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

/**
 *  - Here we're using React navigation "native-stack" navigator. We can refer official docs to view more navigators.
 *      - There is one more navigator "stack". Both these 2 navigators work the same way i.e., we push another page
 *          at the top of the screen & we can then go back to the previous page/screen.
 *      - The imp. difference b/w native-stack & stack is native-stack uses native platform elements for the animation & screens.
 *          Therefore, native-stack can be more performant than stack which emulates the native behaviors.
 *      - That's why native-stack should be our preference but in case we face some issue, we can fall back to stack that gives stack-based navigation.
 *
 *  - Another note is related to navigate() method on the "navigation" object that we get from props. Refer CategoriesScreen.js
 *      - We get "navigation" object only in the components that is loaded as a screen on <Stack.Screen> like CategoriesScreen.js & MealsOverviewScreen.js
 *      - Often if needed, we can define a func that does navigate in such a component & then pass it down to another component
 *          if it's actually another component that initializes the navigation action.
 *  - Question: What if we want to navigate from CategoryGridTile.js. We don't get navigation prop here (Ofc we can forward the prop)
 *      - Alternative to "navigation" as forwarded prop, we can use a special hook provided by React navigation to access "navigation" object in a nested component.
 *          i.e., import { useNavigation } from '@react-navigation/native';
 *      - We can execute this hook in any component func no matter if it's registered as screen or not.
 *          i.e., const navigation = useNavigation();
 *
 *  - Working with Route Parameters to pass Data b/w Screens
 *      - One crucial thing is missing here at the moment is we're not passing any data b/w these screens & ofc we often have navigation b/w screens
 *          that don't need to pass any data, but we definitely want to pass some info about the selected category to the MealsOverviewScreen.
 *      - For e.g., we may want to show Category name in the header instead of MealsOverview name.
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
