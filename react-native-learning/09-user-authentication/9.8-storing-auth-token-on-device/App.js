import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {Colors} from './constants/styles';
import AuthContextProvider, {AuthContext} from "./store/auth-context";
import {useContext, useEffect, useState} from "react";
import IconButton from "./components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading/src/AppLoading";

const Stack = createNativeStackNavigator();

/**
 *  Now we can use this token to log in to get protected data from firebase & also logout to clear all of that.
 *  - With this, we're basically finished the entire flow, but we've a problem now
 *      - If we log in & then close the app, we will have to log in again becoz this token & auth status is only stored in our context
 *          & therefore in memory. This works whilst app is running but as soon as we close & reopen it, the state will be lost.
 *      - So, we might want to store this token on the device & not just in memory so that we can load it when the app starts up again
 *          & we can auto login the user if a token was stored before.
 *      - For storing token on the device, we can use 3rd party lib: React Native AsyncStorage
 *          - npm install @react-native-async-storage/async-storage
 *          - https://react-native-async-storage.github.io/2.0/Installation/
 *          - Refer auth-context.js
 */
function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: Colors.primary100},
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {

    const authCtx = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: Colors.primary100},
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                // Logout Functionality
                headerRight: ({tintColor}) =>
                    <IconButton icon="exit" color={tintColor} size={24} onPress={authCtx.logout} />
            }}/>
        </Stack.Navigator>
    );
}

function Navigation() {

    const authCtx = useContext(AuthContext);
    return (
        <NavigationContainer>
            {!authCtx.isAuthenticated && <AuthStack/> }
            {authCtx.isAuthenticated && <AuthenticatedStack/> }
        </NavigationContainer>
    );
}

/**
 *  The adv of this approach is we can now use the AppLoading component to prolong the loading screen till we're done fetching this token.
 *      - To do this, we need to install another package i.e., expo-app-loading
 *      - npx expo install expo-app-loading
 */
function Root() {

    const [isTryingLogin, setIsTryingLogin] = useState(true);
    const authCtx = useContext(AuthContext);

    useEffect(() => {

        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");

            if(storedToken){
                authCtx.authenticate(storedToken);
            }
            setIsTryingLogin(false);
        }

        fetchToken();

    }, []);

    if(isTryingLogin){
        return <AppLoading/>;
    }
    return <Navigation/>;
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <AuthContextProvider>
                <Root/>
            </AuthContextProvider>

        </>
    );
}
