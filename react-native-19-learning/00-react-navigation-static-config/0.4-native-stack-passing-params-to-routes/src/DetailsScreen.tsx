import {StaticParamList, useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button} from "@react-navigation/elements";
import {
    NativeStackNavigationProp
} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";
import type { StaticScreenProps } from '@react-navigation/native';

/**
 *  - Refer Documentation : https://reactnavigation.org/docs/typescript/#navigator-specific-types
 *  - Issue with Static configuration
 *
 *      type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
 *      export default function DetailsScreen({ route, navigation }: DetailsScreenProps) {
 *          navigation.push('Details', {...});
 *      }
 *      This should work if DetailsScreen is actually registered inside a <Stack.Navigator>
 *          - <Stack.Screen name="Details" component={DetailsScreen} />
 *
 *  - Since we're using the object-based config with createNativeStackNavigator({ screens: { ... } }).
 *      That pattern doesn’t inject the navigation prop correctly in v6/v7 — so navigation ends up undefined.
 *      When you destructure it, you’re pulling undefined, and calling .push throws the error.
 *
 */
type Props = StaticScreenProps<{
    itemId: number; otherParam?: string
}>;

type DetailsScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailsScreen({route}: Props) {
    const navigation = useNavigation<DetailsScreenNavProp>();

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