import { View, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button} from "@react-navigation/elements";

export default function DetailsScreen({ route }) {

    const navigation = useNavigation();

    // 2. Get the param
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                onPress={
                    () =>
                        navigation.push('Details', {
                            // Randomly generate an ID for demonstration purposes
                            itemId: Math.floor(Math.random() * 100),
                        })
                }
            >
                Go to Details... again
            </Button>
        </View>
    );
}