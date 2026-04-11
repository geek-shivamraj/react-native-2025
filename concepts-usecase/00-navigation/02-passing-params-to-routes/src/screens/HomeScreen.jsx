import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "@react-navigation/elements";
import {useEffect} from "react";

// Moving between Screens
export default function HomeScreen({ route }){

    const navigation = useNavigation();
    const { itemId } = route.params;

    // Use an effect to monitor the update to params
    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            alert('New post: ' + route.params?.post);
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text>Home Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>

            {/* Passing params to a previous screen */}
            <Button onPress={() => navigation.navigate('CreatePost')}>
                Create post
            </Button>
            <Button
                onPress={() => {
                    // 1. Navigate to the Details route with params
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            >
                Go to Details
            </Button>
            <Button
                onPress={
                    () =>
                        navigation.setParams({
                            itemId: Math.floor(Math.random() * 100),
                        })
                }
            >
                Update param
            </Button>
        </View>
    );
}