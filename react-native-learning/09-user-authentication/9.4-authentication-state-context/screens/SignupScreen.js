import AuthContent from '../components/Auth/AuthContent';
import {createUser, login} from "../util/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);
    const signupHandler = async ({email, password}) => {
        setIsAuthenticating(true);
        try {
            const token = await createUser({email, password});
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert('Authentication failed',
                'Could not create user, please check your input & try again later!');
        }
        setIsAuthenticating(false);
    }

    if(isAuthenticating){
        return <LoadingOverlay message="Creating user..."/>
    }

    return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
