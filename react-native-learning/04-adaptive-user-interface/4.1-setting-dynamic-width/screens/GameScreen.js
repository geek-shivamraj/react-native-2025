import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

/**
 *  - We've scrolling issue right now for FlatList where the content leaves our screen boundaries.
 *  - A good solution is to wrap a container around the FlatList & then add some styling to that container that controls
 *      how much space this <FlatList> can take up coz by default, a <FlatList> works such that it basically has an infinite height.
 *
 *  - If we restrict that height though through a parent container that we add around it then the <FlatList> will become scrollable inside of that container
 *      and with that we can avoid that it goes beyond the boundaries of our device.
 *
 *
 */
const GameScreen = ({userNumber, onGameOver}) => {

    userNumber = parseInt(userNumber);
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    // To manage the guess rounds logs
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    console.log('User entered number: ' + userNumber);
    console.log('Current guess number: ' + currentGuess);

    useEffect(() => {
        // console.log(typeof currentGuess, typeof userNumber);
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    // To reset the minBoundary & maxBoundary on game restart
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    const nextGuessHandler = (direction) => {   // direction => 'lower', 'greater'

        if ((direction === 'lower' && currentGuess < userNumber)
            || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...",
                [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    };

    const guessRoundsListLength = guessRounds.length;

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Lower or Higher?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/*{guessRounds.map(guessRound =><Text key={guessRound}>{guessRound}</Text>)}*/}

            <FlatList data={guessRounds}
                      renderItem={itemData =>
                          <GuessLogItem roundNumber={guessRoundsListLength - itemData.index}
                                        guess={itemData.item} />}
                      keyExtractor={(item) => item}/>
        </View>
    </View>
}

export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})