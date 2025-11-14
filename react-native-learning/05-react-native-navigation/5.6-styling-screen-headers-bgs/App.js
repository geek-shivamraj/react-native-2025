import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

/**
 *  - Let's work on the default styling we get for the header through React Navigation.
 *  - We might want to fine tune the settings, change the title, change the color of the headers & so on.
 *  - We can configure these where we've defined our screen setup/configuration
 *      - The idea behind this "name" prop in <Stack.Screen> is to use them to navigate b/w screens.
 *      - React Navigation uses these names as default header titles, but often we want to have a different title than this name.
 *          For this we can use "options" prop. Refer: https://reactnavigation.org/docs/native-stack-navigator#options
 *
 *  - We can remove "backgroundColor": "#24180f" from app.json as it seems to have no effect anymore now that we added React Navigation.
 *      - We can use "contentStyle" property to change the background color.
 *      - Adding these styles to specific screen is fine but if you want to have common style for multiple screens then we can add styles to <Stack.Navigator>
 *      - In case we've clash b/w <Stack.Navigator> screenOptions & <Stack.Screen> options then the screen specific setting will always win
 *
 */
export default function App() {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: {backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}
                                  options={{title: 'All Categories'}}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
