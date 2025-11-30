import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation, StaticParamList} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import CreatePostScreen from "./CreatePostScreen";

/**
 *  Refer documentation : https://reactnavigation.org/docs/typescript/#navigator-specific-types
 *  Refer: https://reactnavigation.org/docs/params?config=static
 *
 *  Native Stack React Navigator - Passing Params to a previous screen
 *      - Params aren't only useful for passing some data to a new screen, but they can also be useful to pass data to a previous screen as well.
 *      - For example, let's say you have a screen with a "Create post" button, and the button opens a new screen to create a post.
 *          After creating the post, you want to pass the data for the post back to the previous screen.
 *
 *  Passing Params to a nested Screen
 *      - If you have nested navigators, you need to pass params a bit differently.
 *      - For example, say you have a navigator inside the More screen and want to pass params to the Settings screen inside that navigator.
 *          Then you can pass params as the following:
 *
 *              navigation.navigate('More', {
 *                  screen: 'Settings',
 *                  params: { userId: 'jane' },
 *              })
 *      - For Nesting navigator refer: https://reactnavigation.org/docs/nesting-navigators
 *
 */

const RootStack = createNativeStackNavigator({
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
        CreatePost: CreatePostScreen,
        Details: DetailsScreen,
    },
});

/**
 * Generate the ParamList type for the root navigator and specify it as the default type for the RootParamList type:
 */
export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation />;
}