import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import DetailsScreen, {DetailsScreenRouteParamList} from "./DetailsScreen";

/**
 *
 */

export type RootStackParamList = {
    Home: undefined; // Here we're saying HomeScreen has no route params
    Details: DetailsScreenRouteParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Details"
            screenOptions={{
                headerStyle: {backgroundColor: 'yellow'}
            }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
            <Stack.Screen name="Details" component={DetailsScreen}
                          initialParams={{
                              itemId: 11,
                              otherParam: 'initial default param'
                          }}/>
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
