import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {Colors} from './constants/styles';
import AuthContextProvider, {AuthContext} from "./store/auth-context";
import {useContext} from "react";

const Stack = createNativeStackNavigator();

/**
 *  Let's switch Screens based on authentication status.
 *      - This switching of screen or to be precise of entire screen setups & navigators also called as Route Protection / Screen Protection.
 *      - As we want to make sure that under no circumstances, certain screens can be reached if certain conditions are not meet.
 *          e.g., under no circumstance, the WelcomeScreen should be reached if the user is not logged in.
 *
 *      - We can achieve this by simply putting WelcomeScreen into its own screen setup / navigator & only rendering the navigator
 *          if certain conditions are met.
 *      - Here we want to use the context state to make sure we swap this AuthStack (auth related routes) to
 *          AuthenticatedStack (screens for authenticated users)
 *
 *  Note:
 *      - The Screen switching happens automatically when we switch navigation stacks. We don't need to call navigate() or replace() method explicitly.
 *      - The same is true for all navigators.
 *      - we could also swap individual screens by rendering it dynamically instead  of swapping entire navigators.
 *
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
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: Colors.primary500},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: Colors.primary100},
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
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

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <AuthContextProvider>
                <Navigation/>
            </AuthContextProvider>

        </>
    );
}
