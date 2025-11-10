/**
 *  - Creating Custom Button "PrimaryButton"
 *  - We can refer React Native GitHub library to see how already existing inbuilt "Button" component was built.
 *      - https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Components/Button.js
 *      - It's just the combination of other core components like <View> & <Text> in its core along with stylesheets & logic.
 *
 *  - Common Problem with Ripple effect outside the button using <Pressable> component
 *      - If we wrap the <View> with <Pressable>, we will observe that a slight effect outside the button but not inside of it.
 *      - Solution: Wrap the <Pressable> component with <View> component. i.e., Restructure JSX
 *
 */
import {Pressable, StyleSheet, Text, View} from "react-native";

const PrimaryButton = (props) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={props.onPress} android_ripple={{color: '#644202', foreground: true}}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        /**
         *  - overflow: 'hidden' will ensure that any effect/styling from inside the container
         *      would be clipped from going outside of that container.
         */
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});