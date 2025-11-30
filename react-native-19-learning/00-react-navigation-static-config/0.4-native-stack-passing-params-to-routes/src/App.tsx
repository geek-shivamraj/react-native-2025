import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation, StaticParamList} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

/**
 *  Refer documentation : https://reactnavigation.org/docs/typescript/#navigator-specific-types
 *
 *  Native Stack React Navigator - Passing Parameters to routes
 *      - Let's look at how we can pass data to routes when we navigate to them. There are 2 pieces to this:
 *          1. Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function
 *              E.g., navigation.navigate('RouteName', {params go here} )
 *          2. Read the params in your screen component: route.params
 *      - Note:
 *          - We recommend that the params you pass are JSON-serializable. That way, you'll be able to use state persistence and
 *              your screen components will have the right contract for implementing deep linking.
 *      - Refer HomeScreen & DetailsScreen
 *
 *  Initial Params
 *      - You can also pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used.
 *          They are also shallow merged with any params that you pass. Initial params can be specified in initialParams:
 *          {
 *              Details: {
 *                  screen: DetailsScreen,
 *                  initialParams: { itemId: 42 },
 *              },
 *          }
 *  Updating Params
 *      - Screens can also update their params, like they can update their state. The navigation.setParams method lets you update the params of a screen.
 *          Refer to the API reference for setParams for more details: https://reactnavigation.org/docs/navigation-object/#setparams
 *          navigation.setParams({
 *              itemId: Math.floor(Math.random() * 100),
 *          })
 *      - The setParams method merges the new params with the existing ones. To replace the existing params, you can use replaceParams instead.
 *      - Note
 *          - Avoid using setParams or replaceParams to update screen options such as title etc. If you need to update options, use setOptions instead.
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