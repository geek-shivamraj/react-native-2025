import { View, Text } from "react-native";
import {Button} from "@react-navigation/elements";
import {useNavigation} from "@react-navigation/native";

/**
 *  Navigate to a screen multiple times
 *      - navigate: will do nothing if we're already on that route.
 *      - push: This adds another route regardless of the existing navigation history.
 *      - Each push call adds a new route to the stack, while navigate only pushes if you're not already on that route.
 */
export default function DetailsScreen() {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text>Details Screen</Text>

            {/* navigation.navigate(): Navigating to same screen multiple times will have no effect as we're already on that route */}
            <Button onPress={() => navigation.navigate('Details')}>
                Go to Details... again 1
            </Button>

            {/* navigation.push(): This adds another route to the stack regardless of the existing navigation history. */}
            <Button onPress={() => navigation.push('Details')}>
                Go to Details... again 2
            </Button>

            {/* navigation.goBack(): Go back to the previous screen programmatically */}
            <Button onPress={() => navigation.goBack()}>Go back</Button>

            {/* navigation.popTo(): Go back to a specific screen in the stack */}
            <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>

            {/* navigation.popToTop(): Go back to the first screen in the stack */}
            <Button onPress={() => navigation.popToTop()}>
                Go back to first screen in stack
            </Button>

        </View>
    );
}