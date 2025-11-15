import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItems = ({id, title, imageUrl, duration, complexity, affordability}) => {

    const navigation = useNavigation();
    const selectMealItemHandler = () => {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    };

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc', foreground: true}}
                       style={({pressed}) => pressed && styles.buttonPressed}
                       onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
        </View>
    );
};

export default MealItems;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,

        // Adding overflow: hidden to make sure the ripple effect doesn't go beyond the rounder corners.
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});