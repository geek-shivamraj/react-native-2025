import {StatusBar} from 'expo-status-bar';
import {Alert, Button, Platform, StyleSheet, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import {SchedulableTriggerInputTypes} from "expo-notifications";
import Constants from 'expo-constants';
import * as Device from 'expo-device';

/**
 *  So far, we explored local notifications i.e., we're talking to ourselves.
 *      - We're triggering the notification from inside the app on same device that's sending notification to itself.
 *
 *  - Also, we often want to talk to other instances of the ap installed on other devices by other users that where
 *      PUSH notification come into play coz it allows to push notification/message to other users of the app.
 *      For e.g., Chat message, Marketing, (to one device or to multiple devices)
 *
 *  - We can't directly send push notification to other devices becoz of security reasons & to prevent spam. Therefore, Google
 *      & Apple forces us to use some backend provided by them to send push notification to other devices.
 *      i.e., we need to go over some push notification servers to send those notifications.
 *      - Apple & Google force you to take this extra route but push notification servers are also provided by other providers like Expo.
 *      - Under the hook, Expo is talking to Apple or Google's servers & allows us to talk to one server to send push notifications
 *          to multiple devices running on multiple OS like Android/iOS at the same time.
 *      - Therefore, we must send a message (HTTP request) to push notification server to have that server delivers
 *          a push notification to the devices where our app is installed.
 *      - We can send this HTTP request either from inside our backend code or directly from inside our app.
 *
 *  - Refer: https://docs.expo.dev/push-notifications/overview/
 *      - Push token is simply a string that will be unique for every device. So, this push token is the address,
 *          we will use to send notification to other devices.
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
        console.log('Fetching push token...')
        const configurePushNotifications = async () => {
            const {status} = await Notifications.getPermissionsAsync();
            let finalStatus = status;

            if (finalStatus !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if(finalStatus !== 'granted') {
                Alert.alert('Permission required', 'Push notification need the appropriate permissions.');
                return;
            }

            if(Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.DEFAULT
                });
            }

            console.log(finalStatus);
            const pushTokenData = await Notifications.getExpoPushTokenAsync({
                projectId: "fe05972a-a8af-4155-80a7-6154de67fb44"
            });
            console.log('Received token: ', pushTokenData.data);


        };

        configurePushNotifications();
    }, []);


    useEffect(() => {
        async function registerForPushNotificationsAsync() {
            if (Platform.OS === 'android') {
                await Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }

            if (Device.isDevice) {
                const { status: existingStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    handleRegistrationError('Permission not granted to get push token for push notification!');
                    return;
                }
                const projectId =
                    Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
                if (!projectId) {
                    handleRegistrationError('Project ID not found');
                }
                try {
                    const pushTokenString = (
                        await Notifications.getExpoPushTokenAsync({
                            projectId,
                        })
                    ).data;
                    console.log(pushTokenString);
                    return pushTokenString;
                } catch (error) {
                    handleRegistrationError(`${error}`);
                }
            } else {
                handleRegistrationError('Must use physical device for push notifications');
            }
        }

        function handleRegistrationError(errorMessage) {
            alert(errorMessage);
            throw new Error(errorMessage);
        }
    }, []);

    useEffect(() => {

        const subscription1 = Notifications.addNotificationReceivedListener((notification)  => {
            console.log('NOTIFICATION RECEIVED!');
            console.log(notification);
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

