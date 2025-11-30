import type {StaticScreenProps} from '@react-navigation/native';
import {Text, View} from "react-native";

export type ProfileScreenProps = {
    name: string;
}

export type ProfileScreenRoute = StaticScreenProps<ProfileScreenProps>;

export default function ProfileScreen({route}: ProfileScreenRoute) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20}}>
            <Text>Profile Screen: {route.params.name}</Text>
        </View>
    );
}