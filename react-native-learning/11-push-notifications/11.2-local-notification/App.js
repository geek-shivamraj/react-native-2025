import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import {SchedulableTriggerInputTypes} from "expo-notifications";

/**
 *  The concept behind the Local Notification will help us later when we dive into Push Notifications
 *      - Local Notifications are simply notifications that are triggered by the installed app on the same device on which the app is installed.
 *      - So, these notifications are not sent to any other devices or users but instead triggered by an app for the device on which that app is installed.
 *      - We can simply schedule such notifications from inside the app & also configure the delivery & what should happen
 *          when such a notification is received on the device.
 *
 *  - We might wonder why we need local notifications, becoz whilst it makes sense that we can send notification to other devices like chat message,
 *      it might be not obvious why we might send notification to ourselves.
 *     - For e.g., Remainder app, alarm or todo app
 *     - Well it might not make sense to send ourselves notification that is delivered instantly ut scheduling a notification to be delivered in the future.
 *     - TODO remainder or alarm clock.
 *
 *  - We will add Button which when pressed should actually schedule the local notification.
 *      - Refer doc: https://docs.expo.dev/versions/latest/sdk/notifications/
 *      - We've to import * as Notifications from expo-notification
 *      - Async means it will return promise.
 *  - We should make sure we don't just send or schedule notifications but also able to handle them
 *      - Notification.setNotificationHandler() must be executed to tell the app/underlying OS how incoming notifications
 *          that're related to this app should be handled.
 *      - Executed outside the component func becoz this doesn't need to run whenever the component is updated
 *          just run once when the app starts.
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

