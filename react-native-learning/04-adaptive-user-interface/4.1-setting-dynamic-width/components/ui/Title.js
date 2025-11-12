import {StyleSheet, Text} from "react-native";

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

/**
 *  - If width is not defined, then component will take all the width available in the parent container.
 *
 *  - If we only define width as 300px, then it's always the same 300px width.
 *
 *  - By adding maxWidth: "80%" we're saying apply maxWidth of 80% of the container width and occupy less space if needed.
 *
 *  - By applying both, we're saying take width as 300px unless this is more than 80% of the parent container. If not, stick to the 80%.
 *
 */
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});
