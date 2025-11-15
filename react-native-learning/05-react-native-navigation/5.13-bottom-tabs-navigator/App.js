import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

/**
 *  Refer: https://reactnavigation.org/docs/bottom-tab-navigator
 *      - npx expo install @react-navigation/bottom-tabs
 */

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName="Welcome" screenOptions={{
                headerStyle: {backgroundColor: '#3c0a6b'},
                headerTintColor: '#fff',
                tabBarActiveTintColor: '#3c0a6b'
            }}>
                <BottomTab.Screen name="Welcome" component={WelcomeScreen}
                                  options={{
                                      tabBarIcon: ({color, size}) => (
                                          <Ionicons name="home" size={size} color={color}/>
                                      ),
                                  }}/>
                <BottomTab.Screen name="User" component={UserScreen}
                                  options={{
                                      tabBarIcon: ({color, size}) => (
                                          <Ionicons name="person" size={size} color={color}/>
                                      ),
                                  }}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
