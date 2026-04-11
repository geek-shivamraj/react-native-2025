import {Text, View} from "react-native";
import {Link, useNavigation} from "@react-navigation/native";
import {Button} from "@react-navigation/elements";

// Moving between Screens
export default function HomeScreen(){

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text>Home Screen</Text>
            {/*  Way 1: Using Link components from @react-navigation/native  */}
            <View>
                <Link screen="Details">Go to Details 1</Link>
            </View>
            {/*  Way 2: Using Button components from @react-navigation/elements  */}
            <View>
                <Button screen="Details">Go to Details 2</Button>
            </View>
            {/*  Way 3: Using the navigation object  */}
            <View>
                <Button onPress={() => navigation.navigate('Details')}>
                    Go to Details 3
                </Button>
            </View>
        </View>
    );
}