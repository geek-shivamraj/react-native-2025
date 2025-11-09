/**
 *   - Step 1: Run the app via npm expo start
 *   - Step 2: Press a
 *   - Step 3: If app doesn't reload, press r
 *   - Step 4: If app still doesn't reload, close the expo app on android emulator or phone & open again
 *   - Step 5: Press a, it will load the content to the phone or emulator
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Shivam, Welcome to the New World, 2nd App!!</Text>
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
