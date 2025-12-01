import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen, {ProfileScreenRouteParamList} from "./ProfileScreen";
import {Button} from "@react-navigation/elements";

export type RootStackParamList = {
    Home: undefined;
    Profile: ProfileScreenRouteParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {backgroundColor: 'white'}
            }}>
            <Stack.Screen name="Home" component={HomeScreen}
                          options={{
                              title: 'Overview',
                              // Add a placeholder button without the `onPress` to avoid flicker
                              headerRight: () => (<Button>Update count</Button>)

                          }}/>
            <Stack.Screen name="Profile" component={ProfileScreen}
                          initialParams={{
                              name: 'Default title - Set initialRouteName: Home'
                          }}
                          options={({route}) => ({
                              title: route.params.name,
                          })}/>
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
