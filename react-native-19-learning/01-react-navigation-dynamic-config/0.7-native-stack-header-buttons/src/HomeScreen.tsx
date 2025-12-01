import {Text} from "react-native";
import {Button} from "@react-navigation/elements";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";
import {useEffect, useState} from "react";

export default function HomeScreen({navigation, route}: NativeStackScreenProps<RootStackParamList, 'Home'>) {

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

    return <Text>Count: {count}</Text>;
}