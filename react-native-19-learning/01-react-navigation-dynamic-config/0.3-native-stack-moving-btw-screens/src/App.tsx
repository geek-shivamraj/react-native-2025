import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

/**
 *  Native Stack React Navigator - Moving b/w screens
 *      - navigation.navigate('RouteName') pushes a new route to the native stack navigator if you're not already on that route.
 *      - We can call navigation.push('RouteName') as many times as we like, and it will continue pushing routes.
 *      - The header bar will automatically show a back button, but you can programmatically go back by calling navigation.goBack().
 *          On Android, the hardware back button just works as expected.
 *      - You can go back to an existing screen in the stack with navigation.popTo('RouteName'), and you can go back to the first screen
 *          in the stack with navigation.popToTop().
 *      - The navigation object is available to all screen components with the useNavigation hook.
 *
 *  Navigating to a new screen
 *      - Refer HomeScreen & DetailsScreen
 *
 *  Navigate to a screen multiple times (navigate() Vs push())
 *      - Refer DetailsScreen
 *
 *  Going back
 *      -   The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen
 *          - (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).
 *
 *      - Sometimes you'll want to be able to programmatically trigger this behavior, and for that, you can use navigation.goBack().
 *          - Refer DetailsScreen
 *      - On Android, React Navigation hooks in to the hardware back button and fires the goBack() function for you when the user presses it,
 *          so it behaves as the user would expect.
 *
 *      - Another common requirement is to be able to go back multiple screens. For example, if you are several screens deep in a stack and
 *          want to dismiss all of them to go back to the first screen.
 *          - In this case, we know that we want to go back to Home so we can use popTo('Home').
 *          - Another alternative would be navigation.popToTop(), which goes back to the first screen in the stack.
 *          - Refer DetailsScreen.
 */

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: { backgroundColor: 'tomato' },
    },
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Overview',
            },
        },
        Details: DetailsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation />;
}