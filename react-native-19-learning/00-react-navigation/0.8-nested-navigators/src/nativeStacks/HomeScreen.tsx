import {Text} from "react-native";
import {Button} from "@react-navigation/elements";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppParamList} from "../App";
import {useEffect, useState} from "react";

type HomeScreenNavProp = NativeStackNavigationProp<AppParamList>;

export default function HomeScreen() {

    const navigation = useNavigation<HomeScreenNavProp>();

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>
            ),
        });
    }, [navigation]);

    return (
        <Text>Count: {count}</Text>
    );
}