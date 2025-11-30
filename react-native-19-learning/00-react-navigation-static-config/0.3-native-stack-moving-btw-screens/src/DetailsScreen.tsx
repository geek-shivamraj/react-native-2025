import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {Button} from "@react-navigation/elements";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";

type DetailsScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

/**
 *  Navigate to a screen multiple times
 *      - If you run this code, you'll notice that when you tap "Go to Details... again", it doesn't do anything! This is because we are already on the Details route.
 *      - The navigate function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.
 *
 *      - Let's suppose that we actually want to add another details screen. This is pretty common in cases where you pass in some unique data to each route
 *          - To do this, we can change navigate to push. This allows us to express the intent to add another route regardless of the existing navigation history.
 *          - navigation.push('Details') - Each time you call push we add a new route to the navigation stack. When you call navigate,
 *              it only pushes a new route if you're not already on that route.
 */
export default function DetailsScreen() {
    const navigation = useNavigation<DetailsScreenNavProp>();

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