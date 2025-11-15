import {View, Text, Button, StyleSheet} from 'react-native';

/**
 *  - When we use Drawer Navigation, this "navigation" prop will have a toggleDrawer()
 *  - toggleDrawer() method toggles the drawer i.e., it opens the drawer if it's closed & close it if it's open.
 */
function UserScreen({navigation}) {

    const openDrawerHandler = () => {
        navigation.toggleDrawer();
    };

    return (
        <View style={styles.rootContainer}>
            <Text>
                This is the <Text style={styles.highlight}>"User"</Text> screen!
            </Text>
            <Button title="Open Drawer" onPress={openDrawerHandler}/>
        </View>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#eb1064',
    },
});
