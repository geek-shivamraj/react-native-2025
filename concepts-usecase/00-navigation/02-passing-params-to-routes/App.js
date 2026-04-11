import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";

// Static Configuration
const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerStyle: {backgroundColor: 'tomato'},
    },
    screens: {
        Home: {
            screen: HomeScreen,
            initialParams: {itemId: 42},
            options: {
                title: 'Overview',
            }
        },
        CreatePost: CreatePostScreen,
        Details: DetailsScreen
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

    return <Navigation/>;
}


