import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen, {ProfileScreenRouteParamList} from "./ProfileScreen";
import {Image} from "react-native";

function LogoTitle() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={require('../assets/icon.png')}
        />
    );
}

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
                headerStyle: {backgroundColor: 'green'}
            }}>
            <Stack.Screen name="Home" component={HomeScreen}
                          options={{
                              headerTitle: (prop) => <LogoTitle/>,
                              headerStyle: {
                                  backgroundColor: '#7dc16b'
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: 'bold',
                              },
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