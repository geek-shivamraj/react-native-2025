import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import {SchedulableTriggerInputTypes} from "expo-notifications";

/**
 *  At the moment, we can schedule notifications & we can see them on our device but when we tap them, we go to the app, nothing happens.
 *      sometimes, this is all we want, but sometimes we want to execute some code in our app when a notification is tapped/received.
 *
 *  - This is possible with expo-notification. We can add some event listeners & respective handlers with useEffect to listen to incoming notifications.
 *  - useEffect is a good way of adding event listeners that should be added when the component is rendered, & that should be removed
 *      when the component is removed from the screen even though the app component will never be removed.
 *  - So, it's a good practice to also handle event handler removal to avoid memory leaks.
 *
 *  - Notifications.addNotificationReceivedListener() allows us to register an event handler func that will be executed
 *      whenever a new notification is received by the device.
 *
 *  - We can also react to a user tapping on a notification by adding such an event listener using
 *      Notifications.addNotificationResponseReceivedListener();
 *
 */
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function App() {

    useEffect(() => {

        const subscription1 = Notifications.addNotificationReceivedListener((notification)  => {
            console.log('NOTIFICATION RECEIVED!');
            console.log(JSON.stringify(notification));
            const userName = notification.request.content.data.userName;
            console.log(userName);
        });

        const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
            console.log('NOTIFICATION RESPONSE RECEIVED!');
            console.log(response);
            const userName = response.notification.request.content.data.userName;
            console.log(userName);
        });

        return () => {
            subscription1.remove();
            subscription2.remove();
        };

    }, []);

    useEffect(() => {
        // Request permissions once at app start
        const setup = async () => {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
                console.log('Notification permissions not granted');
            }
        };
        setup();
    }, []);

    const scheduleNotificationHandler = async () => {
        console.log('Schedule Notification Handler Started');

        const response = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'My First Local Notification',
                body: 'This is the body of local Notification',
                data: { userName: 'Max' },
            },
            trigger: { seconds: 5, repeats: false, type: SchedulableTriggerInputTypes.TIME_INTERVAL}
        });

        console.log('Schedule Notification Handler Finished', response);
    };

    return (
        <View style={styles.container}>
            <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />
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

