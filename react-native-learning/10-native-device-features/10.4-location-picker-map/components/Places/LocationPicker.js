import {Alert, Image, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import {Colors} from "../../constants/colors";
import {getCurrentPositionAsync, useForegroundPermissions} from "expo-location";
import {PermissionStatus} from "expo-image-picker";
import {useEffect, useState} from "react";
import {getMapPreview} from "../../util/location";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

/**
 *  - We have 2 ways to pick a location
 *      1. By locating the user through GPS
 *      2. By allowing the user on a Map
 *
 *  - Locating users
 *      - We will need to talk to device again for user's position.
 *      - Expo location (https://docs.expo.dev/versions/latest/sdk/location/), we can easily use the native device feature:
 *          geolocation info from the device i.e., current position of user.
 *      - npx expo install expo-location
 *      - Now location requires some permissions & configuration especially if we need advanced forms of this package.
 *          For e.g., Getting location whilst the app is in the background.
 *  - Our App use case
 *      - We don't require the location of a user whilst running in background.
 *      - For our case, we don't need to do anything special, permissions will be taken care automatically
 *
 *  - Let's add location Preview Map post locating users.
 *      - To show map preview, we will use one of the way i.e., Google Maps (API provided by Google Maps: Maps Static API)
 *      - We will need google account & credit card for the account.
 *      - Refer util/location.js
 *
 *  - Problem with Previewing Picked Locations even though we picked a place on the map
 *      - The reason is whenever we go back from a screen (Map screen) to another screen (AddPlace screen), that component (AddPlace)
 *          & its child components are not recreated. Instead, when using Stack Navigator, the new screen is simply pushed
 *          on the top of the screens stack & all other screens is preserved.
 *      - Becoz of that, the component is not recreated/reevaluated & our effect func doesn't execute.
 *      - To work around, we can use "useIsFocused" hook from @react-navigation/native
 *      - This hook will return boolean if the screen is currently focused or not.
 *
 */
const LocationPicker = () => {

    const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState();
    const isFocused = useIsFocused();

    const navigation = useNavigation();
    const route = useRoute();



    useEffect(() => {
        if(isFocused && route.params) {
            const mapPickedLocation = {
                lat: route.params.pickedLat,
                lng: route.params.pickedLng
            };
            setPickedLocation(mapPickedLocation);
        }
    }, [route, isFocused]);

    const verifyPermissions = async () => {
        if(locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            // permissionResponse.granted will give true or false if permission granted or declined.
            return permissionResponse.granted;
        }

        if(locationPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant location permissions to use this app');
            return false;
        }

        return true;
    }

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();

        if(!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
        setPickedLocation({
           lat: location.coords.latitude,
           lng: location.coords.longitude,
        });
        console.log('Location Fetched!!', pickedLocation);
    }

    const pickOnMapHandler = () => {
        navigation.navigate('Map');
    }

    let locationPreview = <Text>No location picked yet.</Text>
    if(pickedLocation) {
        locationPreview = (
            <Image
                style={styles.image}
                source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}/>
        );
    }

    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>
                    Locate User
                </OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>
                    Pick on Map
                </OutlinedButton>
            </View>
        </View>
    );
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        // borderRadius: 4,
    }
});