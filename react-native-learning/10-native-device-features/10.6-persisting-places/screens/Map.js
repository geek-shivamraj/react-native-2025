import MapView, {Marker} from "react-native-maps";
import {Alert, StyleSheet} from "react-native";
import {useCallback, useLayoutEffect, useState} from "react";
import IconButton from "../components/UI/IconButton";

/**
 *  We want the Map screen a bit more configurable
 *      - We want to make sure that we can set an initial place & we can also hide the save button if we have place in view mode
 */
const Map = ({navigation, route}) => {

    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng
    }

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lng :-122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = (event) => {
        if(initialLocation) {
            return;
        }
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
        if(initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton
                    icon="save"
                    size={24}
                    color={tintColor}
                    onPress={savePickedLocationHandler}/>
            )
        });
    }, [navigation, savePickedLocationHandler, initialLocation]);

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