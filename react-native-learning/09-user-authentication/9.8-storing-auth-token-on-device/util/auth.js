import axios from 'axios';

/*
 curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6gPNhSiB3Wd93FQaPr82SBiuaovQSwIc' \
-H 'Content-Type: application/json' \
--data-binary '{"email":"user@example.com","password":"abc12345","returnSecureToken":true}'

 - Let's send authentication requests to the backend (Firebase Signup endpoint). Refer auth.js
     - Signup doc - https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
     - endpoint: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

 - Refer SignupScreen.js
 - For logging user in: Refer LoginScreen.js
     - Sign in doc: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
     - endpoint: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

 */

const API_KEY = 'AIzaSyB6gPNhSiB3Wd93FQaPr82SBiuaovQSwIc';


const authenticate = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;

    return token;
}

export const createUser = ({email, password}) => {
    return authenticate('signUp', email, password);
}

export const login = async ({email, password}) => {
    return authenticate('signInWithPassword', email, password);
}