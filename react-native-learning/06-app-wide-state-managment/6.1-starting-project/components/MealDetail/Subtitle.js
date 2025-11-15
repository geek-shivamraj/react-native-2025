import {StyleSheet, Text, View} from "react-native";

const Subtitle = ({children}) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        // Imp.: Text can receive borders.
    },
    subTitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
});