import {RouteProp, StaticParamList, useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button} from "@react-navigation/elements";
import {
    NativeStackNavigationProp, NativeStackScreenProps
} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";
import type { StaticScreenProps } from '@react-navigation/native';

export type DetailsScreenRouteParamList = {
    itemId: number; otherParam?: string
}

// type DetailsScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation, route}: NativeStackScreenProps<RootStackParamList, 'Details'>) {
    // const navigation = useNavigation<DetailsScreenNavProp>();

    /* 2. Get the params */
    const {itemId, otherParam} = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 30 }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button onPress={() => navigation.push('Details', {
                // Randomly generate an ID for demonstration purpose
                itemId: Math.floor(Math.random() * 100),
            })}>
                Go to Details... again
            </Button>
            <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}