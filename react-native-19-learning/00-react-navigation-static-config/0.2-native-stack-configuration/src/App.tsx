import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";

/**
 *  Native Stack React Navigator
 *      - React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history.
 *      - React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS
 *          when navigating between routes in the stack.
 *
 *  createNativeStackNavigator
 *
 *  Configuring the navigator
 *  - All the route configuration is specified as props to our navigator.
 *
 *  Specifying options
 *      - Each screen in the navigator can specify some options for the navigator, such as the title to render in the header.
 *      - To specify the options, we'll change how we have specified the screen component. Instead of specifying the screen component as the value,
 *          we can also specify an object with a screen property.
 *
 *      - Sometimes we will want to specify the same options for all the screens in the navigator. For that, we can add a screenOptions property to the configuration
 *
 *  Passing additional Props
 *      - Passing additional props to a screen is not supported in the static API.
 *
 */
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

//  Configuring the navigator
/**
const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    // initialRouteName: 'Details',
    screens: {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
});
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

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation />;
}