import {useNavigation} from "@react-navigation/native";
import {Text, View} from "react-native";
import {RootStackParamList} from "./App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Button} from "@react-navigation/elements";

type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Text>Home Screen</Text>
            <Button children="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here'
                        });
                    }}
            />
        </View>
    );


}