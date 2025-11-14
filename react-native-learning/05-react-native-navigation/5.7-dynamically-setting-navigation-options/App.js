import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

/**
 *  How can we set Navigation options dynamically ?
 *      - We have multiple ways to achieve this
 *          - Way 1: Passing func as value to "options" prop (instead of object)
 *              - This func will be executed by React Navigation & it will receive an obj with 2 pieces of data
 *                  "route" & "navigation"
 *          - Way 2: Set "options" from inside the component using navigation.setOptions() (Refer MealsOverviewScreen.js)
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
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
                    <Stack.Screen
                        name='MealsOverview' component={MealsOverviewScreen}
                        // Way 1
                        // options={({route, navigation}) => {
                        //     const categoryId = route.params.categoryId;
                        //     return {
                        //         title: categoryId,
                        //     };
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
