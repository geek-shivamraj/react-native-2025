import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

/**
 *  Refer: https://reactnavigation.org/docs/drawer-navigator
 *      - npx expo install @react-navigation/drawer
 *      - npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
 */

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Welcome" screenOptions={{
              headerStyle: {backgroundColor: '#3c0a6b'},
              headerTintColor: '#fff',
              drawerActiveBackgroundColor: '#f0e1ff',
              drawerActiveTintColor: '#3c0a6b',
              // drawerStyle: {backgroundColor: '#ccc'},
          }}>
              <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
                  drawerLabel: 'Welcome Screen',
                  drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
              }}/>
              <Drawer.Screen name="User" component={UserScreen} options={{
                  drawerIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
              }}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
