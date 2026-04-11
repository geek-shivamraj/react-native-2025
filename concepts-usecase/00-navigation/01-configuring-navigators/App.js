import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation} from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

/**
 * Navigator Configuration
 * ------------------------
 *  1. initialRouteName
 *  2. options: Each screen can specify options such as header title.
 *  3. screenOptions: Apply options to all screens.
 */

// Static Configuration
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    // Home: HomeScreen,
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview',
      }
    },
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {

  return <Navigation />;
}


