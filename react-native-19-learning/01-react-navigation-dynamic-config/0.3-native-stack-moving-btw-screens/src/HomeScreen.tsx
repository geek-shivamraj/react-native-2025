import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {RootStackParamList} from "./App";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button} from "@react-navigation/elements";

/**
 *  Navigation object reference: https://reactnavigation.org/docs/navigation-object/
 */
export type HomeScreenProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

// type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation, route} : HomeScreenProp) {
    // const navigation = useNavigation<HomeScreenNavProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Text>Home Screen</Text>
            <Button children="Go to Details"
                    onPress={() => navigation.navigate('Details')}
            />
        </View>
    );


}