import {Button, StyleSheet, Text, View} from 'react-native';

/**
 *  There is no CSS support in React Native. 2 ways of adding styling:
 *      1. Inline Styles (By passing a style object to "style" props) - Not Recommended
 *      2. StyleSheet objects (By defining a separate object & then passed through props) - Recommended
 *
 *  - The Styling property we set here are inspired by CSS language (Just a subset of CSS properties & features is supported)
 *
 *  "style" prop
 *      - "style" prop is not supported on all the elements but on some like <View>, <Text>
 */
export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.dummyText}>Another piece of text!</Text>
            </View>

            {/* Inline Style */}
            {/*<Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}> Hello World!</Text>*/}

            <Text style={styles.dummyText}> Hello World!</Text>
            <Button title='Tap me!'/>
        </View>
    );
}

/**
 *  This is recommended way using StyleSheet objects
 *      - This allows us to clearly separate the JSX code & styling code & also makes styles reusable.
 *      - Adv of using StyleSheet object is
 *          - We get convenient auto-completion & validation on style properties.
 *          - React native could potentially optimize style sheet creation & management internally
 *
 *  Refer articles for in-depth understanding
 *    - https://reactnative.dev/docs/style
 *    - https://reactnative.dev/docs/colors
 *    - https://reactnative.dev/docs/view
 *    - https://reactnative.dev/docs/view#style
 *    - https://reactnative.dev/docs/view-style-props
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
        margin: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: 'blue',
    }
});
