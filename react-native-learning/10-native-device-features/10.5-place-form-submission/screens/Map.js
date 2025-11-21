import MapView, {Marker} from "react-native-maps";
import {Alert, StyleSheet} from "react-native";
import {useCallback, useLayoutEffect, useState} from "react";
import IconButton from "../components/UI/IconButton";

/**
 *  This is pick on Map functionality i.e., open a full screen map whenever the button "pick on map" is pressed.
 *      - We want to return a full screen map that should be rendered via a 3rd party package provided by Expo
 *      - Expo MapView: (https://docs.expo.dev/versions/latest/sdk/map-view/)
 *          - Helps with rendering Apple Maps or Google Maps as part of our React native apps.
 *          - Under the hood, it uses another React Native community package
 *          - npx expo install react-native-maps
 */
const Map = ({navigation}) => {

    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = (event) => {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({
            lat: lat,
            lng: lng,
        });
    };

    console.log("selectedLocation", selectedLocation);

    // To make sure this func defined inside the component is not recreated unnecessarily, we use useCallback hook
    // This is required as this func is being used as dependency in useLayoutEffect & to avoid unnecessary rerendering or stop infinite loop.
    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("No location picked yet!!",
                'You have to pick a location (by tapping on the map) first!!');
            return;
        }

        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLng: selectedLocation.lng
        });
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton
                    icon="save"
                    size={24}
                    color={tintColor}
                    onPress={savePickedLocationHandler}/>
            )
        });
    }, [navigation, savePickedLocationHandler])

    return (
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation && <Marker
                title="Picked Location"
                coordinate={{
                    latitude: selectedLocation.lat,
                    longitude: selectedLocation.lng
                }}/>
            }
        </MapView>
    );
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});