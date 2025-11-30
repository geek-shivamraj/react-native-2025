import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import ProfileScreen, {ProfileScreenProps} from "./nativeStacks/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FeedScreen from "./bottomTabs/FeedScreen";
import MessagesScreen from "./bottomTabs/MessagesScreen";

/**
 *  Nesting Navigators:
 *      - Nesting navigators means rendering a navigator inside a screen of another navigator
 *      - In the below example, HomeTabs contains a tab navigator. It is also used for the Home screen in your stack navigator in RootStack.
 *          So here, a tab navigator is nested inside a stack navigator:
 *              - RootStack (Stack navigator)
 *                  - HomeTabs (Tab navigator)
 *                      - Feed (screen)
 *                      - Messages (screen)
 *              - Profile (screen)
 *
 *      - Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators.
 *      - Reference: https://reactnavigation.org/docs/nesting-navigators?config=static
 *
 *  How nesting navigators affect the behavior
 *      - Each navigator keeps its own navigation history
 *          - For example, when you press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside
 *              the nested stack even if there's another navigator as the parent.
 *      - Each navigator has its own options
 *          - For e.g: specifying a title option in a screen nested in a child navigator won't affect the title shown in a parent navigator.
 *          - https://reactnavigation.org/docs/nesting-navigators
 *
 *      - Each screen in a navigator has its own params
 *          - For e.g, any params passed to a screen in a nested navigator are in the route object of that screen and aren't accessible from a screen
 *              in a parent or child navigator.
 *          - If you need to access params of the parent screen from a child screen, you can use React Context to expose params to children.
 *
 *
 */

export type AppParamList = {
    Home: undefined;
    Profile: ProfileScreenProps;
};

const HomeTabs = createBottomTabNavigator({
    screens: {
        Feed: FeedScreen,
        Messages: MessagesScreen,
    },
});

const RootStack = createNativeStackNavigator<AppParamList>({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {backgroundColor: 'tomato'},
    },
    screens: {
        Home: {
            screen: HomeTabs,
            options: {
                headerShown: false
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