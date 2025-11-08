import {StyleSheet, View, Text, Pressable} from "react-native";

/**
 * - We can have ripple effect inside the item by moving <Pressable> into the <View> so it only surrounds the text instead of view box.
 * - For iOS, we can add the "style" prop to <Pressable>
 */
const GoalItem = (props) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "#b4a2c8", foreground: true}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={(pressed) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        padding: 8,
        color: 'white',
    }
});

