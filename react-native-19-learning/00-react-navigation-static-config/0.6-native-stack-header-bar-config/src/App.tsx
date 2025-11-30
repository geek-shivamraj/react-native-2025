import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {createStaticNavigation, StaticParamList} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen, {ProfileScreenProps} from "./ProfileScreen";
import {Image} from "react-native";

/**
 *  Refer documentation : https://reactnavigation.org/docs/typescript/#navigator-specific-types
 *  Refer: https://reactnavigation.org/docs/params?config=static
 *
 *  Native Stack React Navigator - Configuring the header bar
 *
 *  Setting the header title
 *      - Each screen has options which is either an object or a function that returns an object, that contains various configuration options.
 *      - The one we use for the header title is title, as shown in the following example.
 *
 *  Using Params in the title
 *      - In order to use params in the title, we need to make options for the screen a function that returns a configuration object.
 *      - If we make options a function then React Navigation will call it with an object containing { navigation, route } - in this case,
 *          all we care about is route, which is the same object that is passed to your screen props as route prop.
 *      - The argument that is passed in to the options function is an object with the following properties:
 *          1. navigation - The navigation object for the screen.
 *          2. route - The route object for the screen
 *          - We only needed the route object in the above example, but you may in some cases want to use navigation as well.
 *
 *  Updating options with setOptions
 *      - It's often necessary to update the options configuration for the active screen from the mounted screen component itself.
 *          We can do this using navigation.setOptions
 *
 *  Adjusting header styles
 *      - There are three key properties to use when customizing the style of your header: headerStyle, headerTintColor, and headerTitleStyle.
 *          1. headerStyle:
 *              - a style object that will be applied to the view that wraps the header. If you set backgroundColor on it, that will be the color of your header.
 *          2. headerTintColor
 *              - the back button and title both use this property as their color. In the example below, we set the tint color to white (#fff)
 *                  so the back button and the header title would be white.
 *          3. headerTitleStyle
 *              - If we want to customize the fontFamily, fontWeight and other Text style properties for the title, we can use this to do it.
 *
 *  Sharing common options across screens
 *      - It is common to want to configure the header in a similar way across many screens using screenOptions.
 *
 *  Replacing the title with a custom component using headerTitle
 *      - The headerTitle defaults to a Text component that displays the title.
 *
 *  Reference: https://reactnavigation.org/docs/native-stack-navigator/#options
 *
 */

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/icon.png')}
        />
    );
}

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
                // title: 'Overview',
                headerTitle: (props) => <LogoTitle/>,
                headerStyle: {
                    backgroundColor: '#7dc16b'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
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