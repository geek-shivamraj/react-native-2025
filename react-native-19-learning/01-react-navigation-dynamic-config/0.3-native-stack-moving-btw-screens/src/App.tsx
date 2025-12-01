import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

/**
 *  - If we call navigation.navigate with a route name that we haven't defined in a navigator, it'll print an error in development builds and
 *      nothing will happen in production builds i.e., we can only navigate to routes that have been defined on our navigator
 *  - i.e., we cannot navigate to an arbitrary component. So, we now have a stack with two routes: 1) the Home route 2) the Details route.
 */

export type RootStackParamList = {
    Home: undefined; // Here we're saying HomeScreen has no route params
    Details: undefined; // Here we're saying DetailsScreen has no route params
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {backgroundColor: 'yellow'}
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