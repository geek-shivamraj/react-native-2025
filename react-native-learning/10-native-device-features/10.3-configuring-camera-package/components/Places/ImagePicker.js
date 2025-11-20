import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from "expo-image-picker";
import {useState} from "react";
import {Colors} from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

/**
 *  Image Picking consists of multiple steps:
 *      - Step 1: Open camera & show a button to allow users to do so.
 *      - Step 2: Show preview of the image
 *      - & therefore we've UI with multiple elements & some logic attached to it.
 *  - Let's understand how we can actually use the device camera.
 *      - Expo camera (https://docs.expo.dev/versions/latest/sdk/camera/)
 *          - This package doesn't just open the device camera but also allows us to customize the camera screen.
 *          - We can control autofocus, zoom, or we can build our own camera based UI for apps where camera plays a major role.
 *      - Expo location to use user's location (https://docs.expo.dev/versions/latest/sdk/location/)
 *      - Expo storage to store data on device (https://docs.expo.dev/develop/user-interface/store-data/)
 *
 *  - This App use case
 *      - For our app, using expo camera will be an overkill becoz we don't really need to configure the camera screen instead,
 *          we just want to use some default camera screen that simply allows us to take an image.
 *      - ImagePicker package, we will use for our use case. (https://docs.expo.dev/versions/latest/sdk/imagepicker/)
 *          - This package allows us to open the on-device photos or launch the camera (both possible)
 *          - We need to set up some configs to manage permissions correctly.
 *          - Add plugins to app.json file.
 *
 *      - On Android, the app asked automatically for permissions but on iOS, we need to manage ourselves.
 *      - We can use "useCameraPermissions" hook from expo-image-picker that gives us array with 2 values:
 *          cameraPermissionStatus/cameraPermissionInformation and requestPermission func
 *
 *
 */
const ImagePicker = () => {

    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    const verifyPermissions = async () => {
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            // permissionResponse.granted will give true or false if permission granted or declined.
            return permissionResponse.granted;
        }

        if(cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app');
            return false;
        }

        return true;
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if(!hasPermission) {
            return;
        }
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.assets[0].uri);
    };


    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
        </View>
    );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});