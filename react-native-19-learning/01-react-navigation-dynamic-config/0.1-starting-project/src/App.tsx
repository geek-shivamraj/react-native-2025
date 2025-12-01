import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

/**
 *  Creating a native stack navigator
 *      - createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator.
 *          Both of them are React components used for configuring the navigator.
 *      - The Navigator should contain Screen elements as its children to define the configuration for routes.
 *      - NavigationContainer is a component that manages our navigation tree and contains the navigation state.
 *          - Refer: https://reactnavigation.org/docs/navigation-state/
 *      - This component must wrap all the navigators in the app. Usually, we'd render this component at the root of our app,
 *          which is usually the component exported from App.js, App.tsx etc., or used with AppRegistry.registerComponent, Expo.registerRootComponent etc.
 *
 *      - In a typical React Native app, the NavigationContainer should be only used once in your app at the root.
 *          You shouldn't nest multiple NavigationContainers unless you have a specific use case for them.
 *
 */
function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
}