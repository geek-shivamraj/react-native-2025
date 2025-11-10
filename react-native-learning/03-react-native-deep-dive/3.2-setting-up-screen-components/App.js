import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/**
 *  - We will have a couple of screens in this App so, let's create a folder "screens".
 *      - This is not mandatory, but It's recommended to add the components that will act as screens (i.e., taking up the entire size off the screen)
 *          in a separate folder "screens" to make it clear that these will be full screen components.
 *  - We will create a folder "components"
 *      - This will hold all the other components that are then combined to make up these screens.
 *
 *  - We will learn how to switch b/w multiple screens in this section.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
