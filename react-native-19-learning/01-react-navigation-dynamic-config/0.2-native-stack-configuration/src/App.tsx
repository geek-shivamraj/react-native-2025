import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

/**
 *  Configuring the navigator
 *      - All the route configuration is specified as props to our navigator. We haven't passed any props to our navigator,
 *          so it just uses the default configuration.
 *      - A route can be specified by using the Screen component. The Screen component accepts a name prop which corresponds to the name of the route
 *          we will use to navigate, and a component prop which corresponds to the component it'll render.
 *      - Note: When using the dynamic API, the component prop accepts a component, not a render function.
 *          Don't pass an inline function (e.g. component={() => <HomeScreen />}), or your component will unmount
 *          and remount losing all state when the parent component re-renders.
 *
 *  Specifying options
 *      - Each screen in the navigator can specify some options for the navigator, such as the title to render in the header.
 *      - Sometimes we will want to specify the same options for all the screens in the navigator. For that, we can pass a screenOptions prop to the navigator
 *
 *  Passing additional props
 *      - Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:
 *          1. Use React Context & wrap the navigator with a context provider to pass data to the screens (recommended).
 *          2. Use a render callback for the screen instead of specifying a component prop:
 *              - By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations.
 *                  So if you use a render callback, you'll need to ensure that you use React.memo or React.PureComponent for your screen components to avoid performance issues.
 *
 *  Type Checking with TypeScript
 *      - https://reactnavigation.org/docs/typescript
 *
 */
function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

const DetailsScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {backgroundColor: 'tomato'}
            }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
}