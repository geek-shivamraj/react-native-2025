import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./App";

export type ProfileScreenRouteParamList = {
    name: string;
}

export default function ProfileScreen({route}: NativeStackScreenProps<RootStackParamList, 'Profile'>) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Text>Profile Screen: {route.params.name}</Text>
        </View>
    );
}