import {Button, StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import {Ionicons} from "@expo/vector-icons";

/**
 *  Nested Navigators
 *      - We can combine multiple navigators in the same app. For e.g., Stack + Drawer
 *      - We don't need to combine navigators as "Stack" navigator is a super common type of navigator, but sometimes we want to have
 *          certain patterns/features in an app that require the combination of navigators.
 *      - We could have one set of screens combined in stack navigators & then another screen combined with a common drawer navigation above them.
 *
 *      - For e.g., in this app, we will have a drawer on the main screen & we can then choose to go either to All Categories screen or Favorite screen.
 *
 *      - We need to explicitly configure the navigation to have just 1 header instead of 2 (as right now) via options
 *          - Let's remove Stack header.
 *
 *      - "Favorite" feature we will work in next section: App-wide State Management with Redux & Context API
 *
 */

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            sceneStyle: {backgroundColor: '#3f2f25'},
            drawerContentStyle: {backgroundColor: '#351401'},
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1'
        }}>
            <Drawer.Screen name="Categories" component={CategoriesScreen}
                           options={{
                               title: 'All Categories',
                               drawerIcon: ({color, size}) => (
                                   <Ionicons name="list" size={size} color={color}/>
                               ),
                           }}/>
            <Drawer.Screen name="Favorites" component={FavoriteScreen}
                           options={{
                               drawerIcon: ({color, size}) => (
                                   <Ionicons name="star" size={size} color={color}/>
                               ),
                           }}/>
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Drawer" screenOptions={{
                    headerStyle: {backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen name='Drawer' component={DrawerNavigator} options={{headerShown: false}}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
                    <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{title: 'About the Meal'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
