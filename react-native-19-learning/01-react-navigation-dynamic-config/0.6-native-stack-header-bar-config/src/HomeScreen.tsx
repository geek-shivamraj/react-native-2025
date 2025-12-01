import {View} from "react-native";
import {Button} from "@react-navigation/elements";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";

export default function HomeScreen({navigation, route}: NativeStackScreenProps<RootStackParamList, 'Home'>) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Button children="Go to Profile"
                    onPress={() => navigation.navigate('Profile', {
                        name: "New Title"
                    })}/>
        </View>
    );
}