import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabaseSync('places.db');

export const init = async () => {

    try {
        const promise = await database.execAsync(`CREATE TABLE IF NOT EXISTS places
                                                  (
                                                      id
                                                      INTEGER
                                                      PRIMARY
                                                      KEY
                                                      NOT
                                                      NULL,
                                                      title
                                                      TEXT
                                                      NOT
                                                      NULL,
                                                      imageUri
                                                      TEXT
                                                      NOT
                                                      NULL,
                                                      address
                                                      TEXT
                                                      NOT
                                                      NULL,
                                                      lat
                                                      REAL
                                                      NOT
                                                      NULL,
                                                      lng
                                                      REAL
                                                      NOT
                                                      NULL
                                                  )`);
        console.log('Table initialized successfully', promise);
        return promise;
    } catch (error) {
        console.error('Failed to initialize table:', error);
    }

    // const promise = new Promise((resolve, reject) => {
    //     database.transaction((tx) => {
    //         tx.executeSql(`CREATE TABLE IF NOT EXISTS places
    //                        (
    //                            id       INTEGER PRIMARY KEY NOT NULL,
    //                            title    TEXT                NOT NULL,
    //                            imageUri TEXT                NOT NULL,
    //                            address  TEXT                NOT NULL,
    //                            lat      REAL                NOT NULL,
    //                            lng      REAL                NOT NULL
    //                        )`, [],
    //             () => {
    //                 resolve();
    //             },
    //             (_, error) => {
    //                 reject(error);
    //             });
    //     });
    // });

    // return promise;
}

export const insertPlace = async (place) => {
    // console.log('Inserting place', place);
    const statement = await database.prepareAsync('INSERT INTO places (title, imageUri, address, lat, lng) VALUES ($title, $imageUri, $address, $lat, $lng)');
    try {
        const promise = await statement.executeAsync({
            $title: place.title,
            $imageUri: place.imageUri,
            $address: place.address,
            $lat: place.location.lat,
            $lng: place.location.lng
        });
        console.log('Records inserted successfully', promise);
        return promise;
    } catch (error) {
        console.error('Failed to insert the records to the table:', error);
    } finally {
        await statement.finalizeAsync();
    }
}

export const fetchPlaces = async () => {
    const statement = await database.prepareAsync('SELECT * from places');
    try {
        const result = await statement.executeAsync();
        const allRows = await result.getAllAsync();
        for (const row of allRows) {
            // console.log(row);
        }
        return allRows;
    } catch (error) {
        console.error('Failed to fetch the records to the table:', error);
    } finally {
        await statement.finalizeAsync();
    }
}

export const fetchPlaceDetails = async (id) => {
    const statement = await database.prepareAsync('SELECT * from places where id = $placeId');
    try {
        const result = await statement.executeAsync({
            $placeId: id
        });
        const firstRow = await result.getFirstAsync();
        console.log('Record fetched with Id: ' + id, firstRow);
        return firstRow;
    } catch (error) {
        console.error('Failed to fetch the records to the table:', error);
    } finally {
        await statement.finalizeAsync();
    }
}