import { Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStaticNavigation, NavigationContainer} from "@react-navigation/native";

// Static Configuration
const StaticRootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});
const Navigation = createStaticNavigation(StaticRootStack);

// ------------------------------------------------------------------------------------------------------

// Dynamic Configuration
const Stack = createNativeStackNavigator();

const DynamicRootStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
  );
}

export default function App() {

  // Static Configuration
  //return <Navigation />;

  // Dynamic Configuration
  return (
      <NavigationContainer>
        <DynamicRootStack />
      </NavigationContainer>
  );
}

