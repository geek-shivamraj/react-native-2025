import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

/**
 *  Now we stored the token here in our AsyncStorage & we can use it when the app loads up to see if we've a stored token.
 *      - For that, we have to make sure we run some code whenever the app does start for e.g., we can simply run some code
 *          in the AuthContextProvider whenever this provider component is created coz we're using that directly in our App component,
 *          so we know that provider component will be initialized when the app is initialized.
 *
 *      - With using useEffect here, we will see a flicker of login screen on the app. To avoid it, we can prolong the loading screen of our app
 *          i.e., the splash screen till we tried to fetch a token.
 *      - Let's move this side effect code to App.js
 *
 *  - The token we're managing in our context and which we're storing on our device could expire. To be precise, it will depend on your backend, whether it expires or not.
 *  - In Firebase' case, there indeed is a 1h timer on the token. Therefore, the token can still used after 1h but if you're sending it to Firebase,
 *      to access some protected resources, after that hour, it won't work anymore. Firebase will deny access.
 *
 *   - Therefore, you might want to consider doing at least one of two things in your app code:
 *      1. Automatically log the user out after 1h (to avoid that the user thinks he or she is logged in)
 *          - can be achieved with help of setTimeout().
 *          -  You can set a timer which runs in the background and logs the user out after 1h
 *          - Of course you should set that timer to a correct duration. If you just got a new token, the duration will be 1h.
 *              If you logged a user in because the token was stored on the device, the remaining duration is likely less than 1 hour.
 *              You should then calculate the remaining duration by subtracting the current time from the expiration time determine when the token was first received.
 *              Therefore, this expiration time should also be derived and stored, whenever a new token is received.
 *
 *      2. Refresh the token and get a new auth token
 *          - can be achieved with help of a specific auth API endpoint provided by Firebase - this endpoint: https://firebase.google.com/docs/reference/rest/auth#section-refresh-token
 *          - Whenever you get an auth token (i.e., after logging in or creating a new user), you also get a refresh token (see the official documentation for logging in and signing up.
 *              The refreshToken field in the responses carries a token that can be sent to the refresh token API endpoint (https://firebase.google.com/docs/reference/rest/auth#section-refresh-token)
 *              to get a new auth token. For this to work, the refresh token should of course also be stored (in Context and on the device).
 *          - You could set a timer to refresh the token periodically, or you refresh it whenever the auth token expired.
 *
 *  - If you have a backend where tokens don't expire, the above steps of course won't apply to you.
 *
 *  - Alternatively, many third-party services (like Firebase) offer official SDKs which handle token management (and refreshing the token) for you.
 *
 */
const AuthContextProvider = ({children}) => {

    const [authToken, setAuthToken] = useState();

    /*
    useEffect(() => {

        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token");

            if(storedToken){
                setAuthToken(storedToken);
            }
        }

        fetchToken();

    }, []);*/

    const authenticate = (token) => {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    // To clear the token from device.
    const logout = () => {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;