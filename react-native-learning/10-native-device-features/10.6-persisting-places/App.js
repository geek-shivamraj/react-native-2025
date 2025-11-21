import {StatusBar} from 'expo-status-bar';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {Colors} from "./constants/colors";
import Map from "./screens/Map";
import {useEffect, useState} from "react";
import {init} from "./util/database";
import AppLoading from "expo-app-loading";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();

/**
 *  By now, we're able to create places & output a list of places here but at the moment, the list of places is only managed in memory in the end.
 *      - It's managed with help of state in AllPlaces & therefore it's just managed in memory becoz all that state is managed in memory by React.
 *      - i.e., whenever we would restart the app, all the data would be lost. That's why we would like to store it on some backend via API
 *      - We can store data on the database running on the device so that only you & your device will have access to that data.
 *      - With help of another 3rd party package & a specific on-device database: Expo SQLite
 *      - (https://docs.expo.dev/versions/latest/sdk/sqlite/)
 *      - SQLite is a SQL based database that runs on both iOS & Android. This package helps with setting up & interacting with DB
 *      - App.js is a good place to initialize our database.
 *
 */
export default function App() {

    const [dbInitialized, setDbInitialized] = useState(false);
    
    useEffect(() => {
        init().then(() => {
            setDbInitialized(true);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    if(!dbInitialized) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary500},
                    headerTintColor: Colors.gray700,
                    contentStyle: { backgroundColor: Colors.gray700 }
                }}>
                    <Stack.Screen
                        name="AllPlaces"
                        component={AllPlaces}
                        options={({navigation}) => ({
                            title: 'Your Favorite Places',
                            headerRight: ({tintColor}) =>
                                <IconButton icon="add" size={24} color={tintColor}
                                            onPress={() => navigation.navigate('AddPlace')}
                                />
                        })}/>
                    <Stack.Screen
                        name="AddPlace"
                        component={AddPlace}
                        options={{
                            title: 'Add a new Place',
                        }}/>
                    <Stack.Screen name="Map" component={Map}/>
                    <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{
                        title: 'Loading Place...'
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
