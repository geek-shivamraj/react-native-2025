import {View} from "react-native";
import {Button} from "@react-navigation/elements";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AppParamList} from "./App";

type HomeScreenNavProp = NativeStackNavigationProp<AppParamList>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Button children="Go to Profile"
                    onPress={() => navigation.navigate('Profile', {
                        name: "New Title"
                    })}/>
        </View>
    );
}