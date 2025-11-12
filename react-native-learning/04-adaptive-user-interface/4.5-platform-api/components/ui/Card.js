import {Dimensions, StyleSheet, View} from "react-native";
import ColorsAndroid from "../../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    );
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: ColorsAndroid.primary800,
        borderRadius: 8,

        // For Background shadow on Android
        elevation: 4,

        // For ios, we can use below properties for shadow
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});