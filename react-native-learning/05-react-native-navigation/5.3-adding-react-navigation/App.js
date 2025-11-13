import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

/**
 *  - Now we want to add Navigation i.e., we tap an item & we will be taken to a new screen.
 *      - We could add like we did in last module i.e., adding second screen & then use a IF condition & some state to switch b/w screens.
 *      - This would work & this wouldn't even be wrong, but now we want to have a nicer navigation experience now with nice animation
 *          & with the ability to go back & so on.
 *      - Building all above on our own would be rather cumbersome. Rather we can use a 3rd party package: React Navigation
 *      - https://reactnavigation.org/docs/getting-started (Routing & Navigation for Expo & React Native apps)
 *      - Run command:
 *          - npm install @react-navigation/native
 *          - npx expo install react-native-screens react-native-safe-area-context
 *      - React Navigation is a component based library that allows us to set up our navigation configuration.
 *      - We can use "NavigationContainer" component & wrap around all the components in our app that should benefit from Navigation i.e., entire app.
 *          We also need to us one of the supported navigators e.g., native-stack. Refer: https://reactnavigation.org/docs/stack-navigator
 *          - Each of these navigators implement different navigation behaviors.
 *          - For now let's get started with 'native stack' (https://reactnavigation.org/docs/native-stack-navigator)
 *          - Now we've to create navigator & then register different screens that should be part of the navigator.
 *
 *      - After adding <Stack.Screen>, we will get a layout out of the box by React Navigation package. It adds a header, bg, safe area
 *          for us that make sure that we don't collide with the notch or status bar.
 *      - So, we get a nice default wrapper layout that we can configure & fine tune.
 */

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='CategoriesScreen' component={CategoriesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
