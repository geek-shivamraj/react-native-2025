import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {TextInput} from "react-native";
import {Button} from "@react-navigation/elements";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";

type DetailsScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'CreatePost'>;

export default function CreatePostScreen() {
    const navigation = useNavigation<DetailsScreenNavProp>();
    const [postText, setPostText] = useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{height: 200, padding: 10, backgroundColor: 'white', marginBottom: 15}}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                children="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.popTo('Home', {post: postText});
                }}
            />
        </>
    );
}