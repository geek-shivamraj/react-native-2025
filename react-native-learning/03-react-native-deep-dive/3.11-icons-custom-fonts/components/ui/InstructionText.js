import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

/**
 *  - We can create cascading styles via prop
 *      - If we pass an array to "style" prop, the items are passed & evaluated from left to right i.e.,
 *          the styles defined in the right items will overwrite the styles defined in earlier items.
 *      - So, if we add the style prop coming from outside as last item then it would overwrite styles that are defined
 *          in the default style set i.e., we could override the default component style from outside.
 *
 *      - This is an important technique; that allows us to rebuild this cascading nature of CSS in React Native
 *          by simply passing the style as prop into a component & then merging the incoming styles with existing styles
 *          such that you could override the default styles.
 *
 */
const InstructionText = ({children, style}) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
});