import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {createStaticNavigation, StaticParamList} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen, {ProfileScreenProps} from "./ProfileScreen";
import {Image} from "react-native";
import {Button} from "@react-navigation/elements";

/**
 *  Header Buttons: Adding a button to the header
 *      - The most common way to interact with a header is by tapping on a button either to the left or the right of the title.
 *      - Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen,
 *          depending on finger and phone size, but also a normal place to put buttons).
 *      - When we define our button this way, this variable in options is not the HomeScreen instance, so you can't call setState or any instance methods on it.
 *      - This is pretty important because it's common to want the buttons in your header to interact with the screen that the header belongs to.
 *      - Note that a community-developed library for rendering buttons in the header with the correct styling is available: react-navigation-header-buttons.
 *          - https://github.com/vonovak/react-navigation-header-buttons
 *
 *  Header interaction with its screen component
 *      - In some cases, components in the header need to interact with the screen component.
 *      - For this use case, we need to use navigation.setOptions to update our options. By using navigation.setOptions inside the screen component,
 *          we get access to screen's props, state, context etc.
 *
 *  Customizing the back button
 *      - createNativeStackNavigator provides the platform-specific defaults for the back button. On iOS this includes a label next to the button,
 *          which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".
 *      - You can change the label behavior with headerBackTitle and style it with headerBackTitleStyle
 *          - https://reactnavigation.org/docs/native-stack-navigator/#headerbacktitle
 *
 *  Overriding the back button
 *      - The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen —
 *          in other words, the back button will be rendered whenever there is more than one screen in the stack.
 *      - Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above,
 *          in which case you can set the headerLeft option to a React Element that will be rendered, just as we did with headerRight.
 *      - Alternatively, the headerLeft option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button.
 *
 */

export type AppParamList = {
    Home: undefined;
    Profile: ProfileScreenProps;
};

const RootStack = createNativeStackNavigator<AppParamList>({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {backgroundColor: 'tomato'},
    },
    screens: {
        Home: {
            screen: HomeScreen,
            options: {
                title: 'Overview',
                // Add a placeholder button without the `onPress` to avoid flicker
                headerRight: () => (<Button>Update count</Button>)
            },
        },
        Profile: {
            screen: ProfileScreen,
            initialParams: {
              name: 'Default title - Set initialRouteName: Home'
            },
            options: ({route}) => ({
                title: route.params.name,
            }),
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation/>;
}