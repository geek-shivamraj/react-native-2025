import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button} from "@react-navigation/elements";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";

/**
 *  Navigation object reference: https://reactnavigation.org/docs/navigation-object/
 *      - Each time you call push we add a new route to the navigation stack. When you call navigate it only pushes a new route if you're not already on that route.
 *      - The header provided by the native stack navigator will automatically include a back button when it is possible to go back from the active screen
 *      - We can programmatically trigger this behavior, and for that, we can use navigation.goBack().
 *
 */
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>
// type DetailsScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export default function DetailsScreen({navigation, route}: DetailsScreenProps) {
    // const navigation = useNavigation<DetailsScreenNavProp>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 30 }}>
            <Text>Details Screen</Text>
            {/*<Button onPress={() => navigation.navigate('Details')}>*/}
            <Button onPress={() => navigation.push('Details')}>
                Go to Details... again
            </Button>
            {/* Programmatically trigger the back behavior  */}
            <Button onPress={() => navigation.goBack()}>Go back</Button>
            <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
            <Button onPress={() => navigation.popToTop()}>
                Go back to first screen in stack
            </Button>
        </View>
    );
}