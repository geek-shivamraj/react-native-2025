import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen, {HomeScreenRouteParamList} from "./HomeScreen";
import CreatePostScreen from "./CreatePostScreen";

export type RootStackParamList = {
    Home: HomeScreenRouteParamList;
    CreatePost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {backgroundColor: 'green'}
            }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}}/>
            <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
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