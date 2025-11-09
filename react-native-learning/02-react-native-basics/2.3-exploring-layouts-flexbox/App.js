import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

/**
 *  When it comes to building layouts in React Native apps, Flexbox is super imp.
 *   - Flexbox is a key approach/concept which is basically a collection of CSS properties
 *      that we use to control how things look like.
 *   - Flexbox is already implemented in React Native so, we can use all flexbox properties
 *      to position elements inside of containers.
 *
 */
export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal"/>
                <Button title="Add Goal"/>
            </View>
            <View style={styles.goalsContainer}>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    }
});
