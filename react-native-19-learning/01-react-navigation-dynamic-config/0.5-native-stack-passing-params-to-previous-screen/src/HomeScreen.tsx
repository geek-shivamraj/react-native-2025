import {type StaticScreenProps, useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {RootStackParamList} from "./App";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button} from "@react-navigation/elements";
import {useEffect} from "react";

export type HomeScreenRouteParamList = {
    post?: string;
}

// type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation, route} : NativeStackScreenProps<RootStackParamList, 'Home'>) {
    // const navigation = useNavigation<HomeScreenNavProp>();

    // Use an effect to monitor the update to params
    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            alert('Posted Content: ' + route.params?.post);
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <Button onPress={() => navigation.navigate('CreatePost')}>
                Create post
            </Button>
            <Text>Post: {route.params?.post}</Text>
        </View>
    );

}