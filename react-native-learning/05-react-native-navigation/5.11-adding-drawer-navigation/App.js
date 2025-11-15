import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

/**
 *  Refer: https://reactnavigation.org/docs/drawer-navigator
 *      - npx expo install @react-navigation/drawer
 *      - npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
 */

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Welcome">
              <Drawer.Screen name="Welcome" component={WelcomeScreen} />
              <Drawer.Screen name="User" component={UserScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
